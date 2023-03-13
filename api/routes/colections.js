import express from "express";
import {
  addColection,
  deleteColection,
  getColection,
  getColections,
  updateColection,
} from "../controllers/colection.js";

const router = express.Router();

router.get("/", getColections);
router.get("/:id", getColection);
router.post("/", addColection);
router.delete("/:id", deleteColection);
router.put("/:id", updateColection);

export default router;