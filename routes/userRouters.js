import express from "express";
import { getAllUsers, addUser, updateUsers, deleteUser } from "../controllers/userController.js";
const router=express.Router();



router.get('/get-all-users', getAllUsers )
router.post('/add-user', addUser )
router.put('/update-user/:id', updateUsers )
router.delete('/delete-user/:id', deleteUser )

export default router; 