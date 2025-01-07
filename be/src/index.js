import express from "express";
import { configDotenv } from "dotenv";
import authRouter from "./auth/auth.controller.js"
import bencanaRouter from "./bencana/bencana.controller.js"
import cors from "cors"
import helmet from "helmet";
import cookieParser from "cookie-parser";

configDotenv();
const port = process.env.PORT || 3000;

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cookieParser())
// const corsOptions = {
//     origin: [
//         "http://localhost:4173", // Untuk pengembangan lokal
//         "https://disasters-report-react-express.vercel.app" // URL frontend yang di-deploy
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"], // Metode HTTP yang diizinkan
//     credentials: true // Jika Anda menggunakan cookies atau header Authorization
// };
app.use(cors());

// Endpoint root
app.get('/', (req, res) => {
    res.send('Hello from Express.js on Vercel!');
});

app.use('/api', authRouter);
app.use('/api', bencanaRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
