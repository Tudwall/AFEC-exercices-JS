import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import openAPIDoc from "./openapi.json" with {type: "json"};

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api", swaggerUi.serve, swaggerUi.setup(openAPIDoc));

const users = [
	{
		name: "John",
		lastName: "Doe",
	},
];

app.get("/hello", (req, res) => {
	try {
		res.status(200).send("Hello World")
	} catch (err) {
		console.error(err);
	}
});

app.get("/api/users", (req, res) => {
	try {
		if (!users) {
			res.status(400).json({
				message: `Impossible de récupérer les utilisateurs`,
			});
			throw new Error(`Impossible de récupérer les utilisateurs`);
		}
		res.status(200).json({
			users,
		});
	} catch (err) {
		console.error(err);
	}
});

app.listen(PORT, (req, res) => {
	console.info(`Server running on ${PORT}`);
});
