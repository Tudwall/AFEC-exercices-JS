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

router.get("/:email", (req, res) => {
	const user = userSchema.find(req.params.email);
	res.status(200).json({
		user,
	});
	res.send(`You are looking for use ${id}`);
});

router.post("/:id", async (req, res) => {
	const user = {
		id: req.params.id,
		name: req.body.name,
		email: req.body.email,
		age: req.body.age,
		password: req.body.password,
		hidden: req.body.hidden,
	};
	const newUser = new userModel(user);
	await newUser.save();
	res.status(200).json({
		message: `User ${user.id} created`,
	});
});

module.exports = router;
