const express = require("express");

const app = express();
const port = 3000;
const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

// middleware
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello world");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
