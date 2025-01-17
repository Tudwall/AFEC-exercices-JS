const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");

router.use(express.json());

router.get("/", (req, res) => {
	res.send("You are in the users' route");
});

router.get("/all", (req, res) => {
	res.send("You are trying to get all users");
});

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const user = await userModel.find({ id: req.params.id });
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

router.post("/", async (req, res) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		age: req.body.age,
		password: req.body.password,
		hidden: req.body.hidden,
	};
	const newUser = new userModel(user);
	await newUser.save();
	res.status(200).json({
		message: `User created`,
	});
});

router.delete("/:id", async (req, res) => {
	await userModel.deleteOne({ id: req.params.id });
	res.status(200).json({
		message: `User ${req.params.id} has been deleted`,
	});
});

module.exports = router;
