const express = require("express");
const router = express.Router();
const userModel = require("../models/User");

router.use(express.json());

// récupère tout les users
router.get("/", async (req, res) => {
	try {
		const users = await userModel.find();
		res.status(200).json({
			users,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "server offline",
		});
	}
});

// récupère les users par id
router.get("/:id", async (req, res) => {
	if (!req.params?.id) {
		res.status(400).json({
			message: `id required`,
		});
	}
	try {
		const id = req.params.id;
		const user = await userModel.findById(id);
		console.log(user);
		if (user.length !== 0) {
			res.status(200).json({
				user,
			});
		} else {
			res.status(404).json({
				message: `Error 404: User ${id} not found`,
			});
		}
	} catch (err) {
		res.send(err);
	}
});

// créer un user
router.post("/", async (req, res) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};
	const newUser = new userModel(user);
	await newUser.save();
	res.status(201).json({
		message: `User created`,
	});
});

module.exports = router;
