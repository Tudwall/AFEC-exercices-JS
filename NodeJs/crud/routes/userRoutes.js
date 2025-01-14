const express = require("express");
const router = express.Router();
let users = require("../models/users");

// Créer
router.post("/", (req, res) => {
	console.log(req.body);
	let user;
	if (users.length == 0) {
		user = { ...req.body, id: 1 };
	} else {
		user = { ...req.body, id: users[users.length - 1].id + 1 };
	}
	if (user.email) {
		users.push(user);
		res.status(200).json({
			message: `Utilisateur ${user.name} créé`,
		});
	} else {
		res.status(400).json({
			message: `Impossible de créer l'utilisateur, pas d'email`,
		});
	}
});

// Lire
router.get("/", (req, res) => {
	if (!users.length) {
		return res.status(404).json({
			message: "Données non disponibles",
			users,
		});
	}
	res.json({
		message: "Utilisateurs récupérés avec succès",
		users,
	});
});

// user spécifique
router.get("/:id", (req, res) => {
	const { id } = req.params;
	console.log(id);
	const user = users.find((user) => user.id === parseInt(id));
	if (user) {
		res.json({
			message: "Utilisateur trouvé",
			user,
		});
	} else {
		return res.status(404).json({
			message: `Impossible de trouver l'utilisateur ${id}`,
			user,
		});
	}
});

// mise à jour
router.put("/:id", (req, res) => {
	if (!req.params?.id || !req.body?.name || !req.body?.email) {
		res.status(400).json({
			message: `info manquante`,
		});
	}
	const { id } = req.params;
	const { name, email } = req.body;
	const user = users.find((user) => {
		console.log("user id" + user);
		return user.id === parseInt(id);
	});
	console.log(user);
	console.log("id" + id);
	if (user) {
		user.name = name;
		user.email = email;
		res.status(200).json({
			message: `Utilisateur ${id} modifié`,
			user,
		});
	} else {
		res.status(404).json({
			message: `Impossible de trouver l'utilisateur ${id}`,
		});
	}
});

// Suppression
router.delete("/:id", (req, res) => {
	const { id } = req.params;
	const user = users.find((user) => user.id === parseInt(id));
	if (user) {
		users = users.splice((users.indexOf(user), 1));

		res.status(200).json({
			message: `Utilisateur ${id} supprimé`,
		});
	}
});

module.exports = router;
