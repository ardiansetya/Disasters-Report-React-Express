import { Router } from "express";
import { authMiddleware } from "../middleware/middleware.js";
import { createDisaster, deleteDisaster, editDisaster, getAllDisaster, getDisasterById } from "./bencana.services.js";

const router = Router();

// Mendapatkan semua disaster
router.get("/disasters", authMiddleware, async (req, res) => {
    const { userId } = req.user;
    try {
        const disasters = await getAllDisaster(userId);
        res.json(disasters);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Membuat disaster baru
router.post("/disasters", authMiddleware, async (req, res) => {
    const newDisasterData = req.body;
    const userId = req.user.userId;

    try {
        const disaster = await createDisaster(newDisasterData, userId);
        res.json(disaster);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Mendapatkan disaster berdasarkan ID
router.get("/disasters/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { userId } = req.user;
    try {
        const disaster = await getDisasterById(parseInt(id), userId);
        res.status(200).json(disaster);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Mengedit disaster berdasarkan ID
router.put("/disasters/:id", authMiddleware, async (req, res) => {
    const newDisasterData = req.body;
    const { id } = req.params;
    const { userId } = req.user; 

    console.log(id, userId);

    // Validasi input
    if (!newDisasterData.reporterName || !newDisasterData.location || !newDisasterData.disasterType || !newDisasterData.description || !newDisasterData.date) {
        return res.status(422).json({ message: "Missing required fields" });
    }

    try {
        // Memanggil fungsi untuk mengedit disaster berdasarkan ID dan userId
        const disaster = await editDisaster(parseInt(id), newDisasterData, userId);

        if (!disaster) {
            return res.status(404).json({ message: "Disaster not found" });
        }

        // Jika update berhasil
        res.status(200).json({ disaster, message: "Disaster updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Menghapus disaster berdasarkan ID
router.delete("/disasters/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { userId } = req.user;
    try {
        const disaster = await deleteDisaster(parseInt(id), userId);
        res.status(200).json({ disaster, message: "Disaster deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

export default router;
