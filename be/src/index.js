import express from "express";
import { configDotenv } from "dotenv";
import authRouter from "./auth/auth.controller.js"
import bencanaRouter from "./bencana/bencana.controller.js"

configDotenv();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Endpoint root
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api', authRouter);
app.use('/api', bencanaRouter);

// Jalankan server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
