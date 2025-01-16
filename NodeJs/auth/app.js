const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const authenticate = (req, res, next) => {
	if (!req.headers["authorization"]) {
		res.status(403).send("Accès interdit");
	} else {
		req.user = {
			name: "John",
			role: "admin",
			id: 1,
		};
		next();
	}
};

const checkRole = (req, res, next) => {
	if (req.user?.role && req.user.role !== "admin") {
		res.status(403).send("Permissions insuffisantes");
	} else {
		next();
	}
};

app.get("/public", (req, res) => {
	console.log(req);
	res.send("Bienvenue sur la partie publique");
});

app.get("/private", authenticate, (req, res) => {
	res.send("Contenu privé");
});

app.get("/admin", authenticate, checkRole, (req, res) => {
	res.send("Contenu accessible");
});

app.listen(port, () => {
	console.info(`server is running on port ${port}`);
});
