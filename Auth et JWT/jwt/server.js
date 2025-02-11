import express from "express";
import argon2 from "argon2";
import "dotenv/config";

const app = express();

app.use(express.json());

const users = [
	{
		id: 1,
		name: "John",
		pwd: "123",
	},
	{
		id: 2,
		name: "Jane",
		pwd: "azerty",
	},
];

app.port("/signup", async (req, res) => {
	const { id, name, pwd } = req.body;
	if (!id || !name || !pwd) {
		return res.status(400).send("bad request");
	}
	const idExists = users.some((user) => user.id === id);
	if (idExists) {
		return res.status(400).send("bad request");
	}
	const hashedPass = await argon2.hash(pwd);
	users.push({ id: id, name: name, pwd: hashedPass });
	return res.status(201).send("user saved");
});

app.listen(PORT, (req, res) => console.info(`server running on ${PORT}`));
