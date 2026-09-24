import "dotenv/config";
import express from "express";
import connectDB from "./src/config/db.js";
import mentorRoutes from "./src/routes/mentorRoutes.js";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/mentors", mentorRoutes);
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});