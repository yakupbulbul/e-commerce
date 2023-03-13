import express from "express";
import {
  addCat,
  deleteCat,
  getCat,
  getCats,
  updateCat,
} from "../controllers/cat.js";

const router = express.Router();


router.get("/", getCats);
router.get("/:id", getCat);
router.post("/", addCat);
router.delete("/:id", deleteCat);
router.put("/:id", updateCat);

export default router;