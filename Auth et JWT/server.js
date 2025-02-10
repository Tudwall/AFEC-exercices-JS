import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

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

const hashPassword = async (pwd) => {
	try {
		const hash = await argon2.hash(pwd);
		return hash;
	} catch (err) {
		console.error("no pwd");
	}
};

app.post("/signup", async (req, res) => {
	const { id, name, pwd } = req.body;
	if (!id || !name || !pwd) {
		return res.status(400).send("bad request");
	}
	const idExists = users.some((user) => user.id == id);
	if (idExists) {
		return res.status(400).send("bad request");
	}
	const hashedPass = await argon2.hash(pwd);
	users.push({ id: id, name: name, pwd: hashedPass });
	console.log(users);
	return res.status(201).send("user saved");
});

app.post("/login", async (req, res) => {
	try {
		const { id, name, pwd } = req.body;
		if (!name || !pwd) {
			return res.status(400).send("bad request");
		}
		const user = users.find((user) => user.id === id);
		const result = await argon2.verify(user.pwd, pwd);
		if (!result) {
			res.status(401).send("wrong password");
		}
		const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
			expiresIn: "30m",
		});
		console.log(token);

		res.cookie("token", token, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000,
		});
        res.send("connecté")
	} catch (err) {
		console.error(err.message);
		res.status(500).send("server error");
	}
});

app.listen(PORT, () => console.info(`server running on ${PORT}`));
