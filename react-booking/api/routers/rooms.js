import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post("/", (req, res) => {

})
//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom)
//DELETE
router.delete("/:id/:hotelid", deleteRoom)
//GET
router.get("/:id", getRoom)
//GET ALL
router.get("/", getRooms)

export default router