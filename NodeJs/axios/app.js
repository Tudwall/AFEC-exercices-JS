const express = require("express");
const axios = require("axios");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
	res.send("Bienvenue");
});

// Récupérer tous les utilisateurs
app.get("/users", async (req, res) => {
	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/users`
		);
		console.log(response);
		if (response.data.length == 0) {
			throw new Error("Impossible de récupérer les users");
		} else {
			res.json(response.data);
		}
	} catch (error) {
		console.error(error);
		res.status(400).json({
			message: `${error}`,
		});
	}
});

// Récupérer un utilisateur spécifique
app.get("/users/:id", async (req, res, next) => {
	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${req.params.id}`
		);
		if (!response.data) {
			throw new Error("Impossible de trouver l'user");
		} else {
			res.json(response.data);
		}
	} catch (error) {
		console.error(error);
		next(error);
	}
});

app.use((err, req, res, next) => {
	console.log("ici");
	console.error(err.stack);
	res.status(500).send("erreur du serveur !");
});

app.listen(port, () => {
	console.info(`Server is running at http://localhost:${port}`);
});
