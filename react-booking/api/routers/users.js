import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/*
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Olá, você está logado =)")
})
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Olá, você está logado e pode deletar sua conta =)")
})
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Olá ADM, você está logado e pode deletar TODAS  as contas =)")
})
*/


//UPDATE
router.put("/:id", verifyUser, updateUser)
//DELETE
router.delete("/:id", verifyUser, deleteUser)
//GET
router.get("/:id", verifyUser, getUser)
//GET ALL
router.get("/", verifyAdmin, getUsers)

export default router