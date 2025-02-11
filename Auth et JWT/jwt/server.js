import express from "express";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

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

let blackList = [];

app.post("/signup", async (req, res) => {
	const { id, name, pwd } = req.body;
	if (!id || !name || !pwd) {
		return res.status(400).send("bad request");
	}
	const idExists = users.some((user) => user.id === id);
	if (idExists) {
		return res.status(400).send("bad request");
	}
	// Hashe le mot de passe et stocke uniquement le hash
	const hashedPass = await argon2.hash(pwd);
	users.push({ id: id, name: name, pwd: hashedPass });
	return res.status(201).send("user saved");
});

app.post("/login", async (req, res) => {
	try {
		const { id, name, pwd } = req.body;
		if (!name || !pwd) {
			return res.status(400).send("bad request");
		}
		const user = users.find((user) => user.id === id);
		// Verifie que le password match au hash stocké
		const result = await argon2.verify(user.pwd, pwd);
		if (!result) {
			res.status(401).send("bad password");
		}
		// Génère le token
		const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
			expriresIn: "30m",
		});
		// Stocke le token dans un cookie
		res.cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
		res.send("connecté");
	} catch (err) {
		res.status(500).send("server error");
	}
});

const checkToken = (req, res, next) => {
	// Récupère les cookies
	const userCookie = req.cookie.token;
	if (!userCookie) {
		return res.status(401).send("missing cookie");
	}
	// Decoded représente les données décodées du token
	jwt.verify(userCookie, process.env.JWT_SECRET, (err, decoded) => {
		const user = users.find((user) => user.id === req.id);
		if (!user) {
			return res.status(401).send("Accès refusé");
		} else {
			req.user = user;
			next();
		}
	});
};

app.get("/", checkToken, async (req, res) => {
	res.send(users);
});

app.post("/logout", (req, res) => {
	const userCookie = req.cookie.token;
	if (!userCookie) {
		res.status(401).send("must be logged in to log out");
	}
	const tokenExists = blackList.find((token) => userCookie === token);
	if (tokenExists) {
		res.status();
	}
});

app.listen(PORT, (req, res) => console.info(`server running on ${PORT}`));
