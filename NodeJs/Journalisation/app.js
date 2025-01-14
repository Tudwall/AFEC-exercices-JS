const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

const logDirectory = path.join(__dirname, "log");
if (!fs.existsSync(logDirectory)) {
	fs.mkdirSync(logDirectory);
}

app.use((request, response, next) => {
	const date = new Date();
	console.log(`${request.method} ${request.url} ${date.toLocaleString}`);
});

app.get("/", (request, response) => {
	response.send("Hello world!");
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}/`);
});
