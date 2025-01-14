const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Bienvenue");
});

app.get("/query", (req, res) => {
	console.log(req.query);
});

app.get("/:id", (req, res) => {
	console.log(req.params);
});

app.post("/", (req, res) => {
	console.log(req.body);
	res.send("data obtained");
});

app.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
});
