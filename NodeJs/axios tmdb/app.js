const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = 3000;
const movieRoutes = require("./routes/movieRoutes");

app.use(express.json());
app.use("/movies", movieRoutes);

app.get("/", (req, res) => {
	res.send("Bienvenue");
});

app.listen(port, (req, res) => {
	console.info(`Server is running on http://localhost:${port}`);
});
