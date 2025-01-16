const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const authenticate = (req, res, next) => {
	if (!req.headers["authorization"]) {
		return res.status(403).send("Accès interdit");
	}
	next();
};

const checkRole = (req, res, next) => {
	if (!req.body.role == "admin") {
		return res.status(403).send("Permissions insuffisantes");
	}
	next();
};

app.get("/public", (req, res) => {
	console.log(req);
	res.send("Bienvenue sur la partie publique");
});

app.get("/private", authenticate, (req, res) => {
	res.send("Contenu privé");
});

app.get("/admin", checkRole, (req, res) => {
	console.log(req.body.role);
	res.send("Contenu accessible");
});

app.listen(port, () => {
	console.info(`server is running on port ${port}`);
});
