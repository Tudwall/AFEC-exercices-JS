import express from "express";
import User from "../models/User.js";
import {
	createUser,
	getAllUsers,
	getUserById,
} from "../controllers/user.controller.js";

const router = express.Router();

// all users
router.get("/", getAllUsers);

// by id
router.get("/:id", getUserById);

// create user
router.post("/", createUser);

// update user
router.patch("/:id/", async (req, res) => {
	try {
		if (!req.params?.id) {
			res.status(400).json({
				message: `id required`,
			});
			throw new Error(err);
		} else {
			const id = req.params.id;
			let user = await User.findById(id);
			if (user.length !== 0) {
				user = {
					name: req.body?.name,
					email: req.body?.email,
				};
				await user.save();
				res.status(201).json({
					message: `user updated`,
				});
			} else {
				res.status(404).json({
					message: `user not found`,
				});
				throw new Error(err);
			}
		}
	} catch (err) {
		console.error(err);
	}
});

export default router;
