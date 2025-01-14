const express = require("express");
const router = express.Router();
let posts = require("../models/posts");

// Créer
router.post("/", (req, res) => {
	console.log(req.body);
	let post;
	if (posts.length == 0) {
		post = { ...req.body, id: 1 };
	} else {
		post = { ...req.body, id: users[users / length - 1].id + 1 };
	}
	if (post.content && post.user) {
		posts.push(post);
		res.status(200).json({
			message: `Post ${post.title} créé par ${post.user}`,
		});
	} else {
		res.status(400).json({
			message: `Impossible de créer le post, pas de contenu de post ou d'auteur`,
		});
	}
});

// Récupérer tout les posts
router.get("/", (req, res) => {
	if (!posts.length) {
		return res.status(404).json({
			message: `Données non disponibles`,
			posts,
		});
	}
	res.json({
		message: `Posts récupérés avec succès`,
		posts,
	});
});

// Post par user spécifique
router.get("/:user", (req, res) => {
	const { user } = req.params;
	console.log(user);
	const post = posts.find((post) => post.user === user);
	if (post) {
		res.json({
			message: `Post trouvé`,
			post,
		});
	} else {
		return res.status(404).json({
			message: `Impossible de trouver les posts de ${user}`,
			post,
		});
	}
});

// Modifier
router.put("/:id", (req, res) => {
	if (
		!req.params?.id ||
		!req.body?.title ||
		!req.body?.content ||
		!req.body?.user
	) {
		res.status(400).json({
			message: `info manquante`,
		});
	}
	const { id } = req.params;
	const { title, content, user } = req.body;
	const post = posts.find((post) => {
		console.log("post id" + post);
		return post.id === parseInt(id);
	});
	console.log(post);
	console.log("id" + id);
	if (post) {
		post.title = title;
		post.content = content;
		post.user = user;
		res.status(200).json({
			message: `post ${id} modifié`,
			post,
		});
	} else {
		res.status(404).json({
			message: `Impossible de trouver le post ${id}`,
		});
	}
});

// Supprimer
router.delete("/:id", (res, req) => {
	const { id } = req.params;
	const post = posts.find((post) => post.id === parseInt(id));
	if (post) {
		posts = posts.splice((posts.indexOf(post), 1));
		res.status(200).json({
			message: `Post ${id} supprimé`,
		});
	}
});

module.exports = router;
