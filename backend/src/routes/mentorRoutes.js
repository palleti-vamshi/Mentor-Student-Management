import express from "express";
import mentorController from "../controllers/mentorController.js";
const router = express.Router();

router.get("/", mentorController.getAllMentors);

export default router;