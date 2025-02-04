import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Palladium API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
