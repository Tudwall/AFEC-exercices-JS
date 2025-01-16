const express = require("express");
const dotenv = require("dotenv").config();
const mongooseConnect = require("./config/mongooseConnect");

const app = express();

mongooseConnect();

const port = 3000;

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/users", userRoutes);

app.listen(port, (req, res) => {
	console.info(`server running on ${port}`);
});
