const express = require("express");
const router = express.Router();
const axios = require("axios");

router.use(express.json());

// Récupérer les films populaires
router.get("/popular", async (req, res) => {
	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1`,
			{ params: { api_key: process.env.TMDB_API_KEY } }
		);
		console.log(response.data);
		if (response.data.length == 0) {
			throw new Error("Impossible de récupérer les users");
		} else {
			res.json(response.data);
		}
	} catch (err) {
		console.error(err);
		res.status(400).json({
			message: `${err}`,
		});
	}
});

router.get("/details/:id", async (req, res) => {
	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/${req.params.id}?language=fr-FR`,
			{ params: { api_key: process.env.TMDB_API_KEY } }
		);
		console.log(response.data);
		if (response.data.length == 0) {
			throw new Error("Impossible de récupérer les users");
		} else {
			res.json(response.data);
		}
	} catch (err) {
		console.error(err);
		res.status(400).json({
			message: `${err}`,
		});
	}
});

module.exports = router;
