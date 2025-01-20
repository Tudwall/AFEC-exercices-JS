const express = require("express");
const dotenv = require("dotenv").config();
const mongooseConnect = require("./config/db");

const app = express();

mongooseConnect();

const port = 3000;

const userRoutes = require("./routes/userRoutes.js");

app.use(express.json());

app.use("/users", userRoutes);

app.listen(port, (req, res) => {
	console.info(`server is runnin on ${port}`);
});
