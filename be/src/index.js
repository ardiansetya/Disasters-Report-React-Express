import express from "express";
import { configDotenv } from "dotenv";
import authRouter from "./auth/auth.controller.js"
import bencanaRouter from "./bencana/bencana.controller.js"
import cors from "cors"
import cookieParser from "cookie-parser";

configDotenv();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", 
    credentials: true
}));

// Endpoint root
app.get('/', (req, res) => {
    res.send('Hello from Express.js on Vercel!');
});

app.use('/api', authRouter);
app.use('/api', bencanaRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
