const express = require("express");

const app = express();
const port = 3000;
const userRoutes = require("./routes/userRoutes");
const postsRoutes = require("./routes/postsRoutes");

app.use("/users", userRoutes);
app.use("/posts", postsRoutes);

app.get("/", (req, res) => {
	res.send("hello world");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
