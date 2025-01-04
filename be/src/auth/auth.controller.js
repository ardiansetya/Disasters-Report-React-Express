import bcryptjs from "bcryptjs";
import { Router } from "express";
import jwt from "jsonwebtoken";
import validator from "validator";
import { configDotenv } from "dotenv";
import { prisma } from "../db/index.js";

configDotenv();
const router = Router();

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Validasi input
        if (!email || !password) {
            return res.status(422).json({ message: "Missing required fields" });
        }

        if (!validator.isEmail(email)) {
            return res.status(422).json({ message: "Invalid email format" });
        }

        // Cek apakah user ada di database
        const user = await prisma.user.findFirst({
            where: { email },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
            },
        });

        if (!user) {
            return res.status(401).json({ message: "Email or password is incorrect" });
        }

        // Verifikasi password
        const matchedPassword = await bcryptjs.compare(password, user.password);
        if (!matchedPassword) {
            return res.status(401).json({ message: "Email or password is incorrect" });
        }

        // Buat access token
        const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            subject: "accessApi",
            expiresIn: process.env.JWT_SECRET_EXPIRATION,
        });

        // Buat refresh token
        const refreshToken = jwt.sign({ userId: user.id }, process.env.JWT_REFRESH_TOKEN, {
            subject: "refreshToken",
            expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION,
        });

        // Simpan refresh token ke database
        await prisma.refreshToken.create({
            data: {
                token: refreshToken,
                expiresAt: new Date(Date.now() + parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRATION) * 1000),
                userId: user.id,
            },
        });

        const { password: _, ...userWithoutPassword } = user;

        // Set refresh token di HTTP-only cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Pastikan secure di lingkungan produksi
            sameSite: "strict",
            maxAge: parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRATION) * 1000, // Convert to milliseconds
        });

        // Kirim response
        res.status(200).json({
            user: userWithoutPassword,
            token: accessToken,
            message: "Login successful",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Refresh Token
router.post("/refresh-token", async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        // Validasi keberadaan refresh token di cookie
        if (!refreshToken) {
            return res.status(401).json({ message: "Missing refresh token" });
        }

        // Cari token di database
        const storedToken = await prisma.refreshToken.findFirst({
            where: { token: refreshToken },
        });

        if (!storedToken) {
            return res.status(401).json({ message: "Invalid refresh token" });
        }

        // Verifikasi refresh token
        let decoded;
        try {
            decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN);
        } catch (err) {
            return res.status(401).json({ message: "Refresh token invalid or expired" });
        }

        // Hapus token lama dari database
        await prisma.refreshToken.delete({
            where: { id: storedToken.id },
        });

        // Buat access token baru
        const accessToken = jwt.sign(
            { userId: decoded.userId },
            process.env.JWT_SECRET,
            {
                subject: "accessApi",
                expiresIn: process.env.JWT_SECRET_EXPIRATION,
            }
        );

        // Buat refresh token baru
        const newRefreshToken = jwt.sign(
            { userId: decoded.userId },
            process.env.JWT_REFRESH_TOKEN,
            {
                subject: "refreshToken",
                expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION,
            }
        );

        // Simpan refresh token baru ke database
        await prisma.refreshToken.create({
            data: {
                token: newRefreshToken,
                userId: decoded.userId,
                expiresAt: new Date(Date.now() + parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRATION) * 1000),
            },
        });

        // Set refresh token baru di cookie
        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Pastikan secure di lingkungan produksi
            sameSite: "strict",
            maxAge: parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRATION) * 1000,
        });

        // Kirim access token baru ke klien
        return res.status(200).json({
            accessToken,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Register
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    // Validasi input
    if (!name || !email || !password) {
        return res.status(422).json({ message: "Missing required fields" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                email,
            },
        });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Simpan user baru
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
            select: {
                name: true,
                email: true,
            },
        });
        return res.status(201).json({ user, message: "User created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
