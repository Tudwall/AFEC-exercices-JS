import express from "express";
import "dotenv/config";
import productRoutes from "./routes/product.routes.js";
import DatabaseException from "./errors/database.exception.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/products", productRoutes);

app.use((err, req, res, next) => {
	if (err instanceof DatabaseException) {
		res.status(500).json({ message: "Une erreur base de donnée est survenue" });
	} else {
		res.status(500).json({ message: "Une erreur est survenue" });
	}
});

app.use((req, res) => {
	res.status(404).send("Route introuvable");
});

app.listen(PORT, () => console.info(`server is running on ${PORT}`));
