import express from "express";
import ProductController from "../controllers/product.controller.js";
import ArgumentRequiredException from "../errors/argumentRequired.exception.js";
import ResourceAlreadyExists from "../errors/resourceAlreadyExists.exception.js";
import ResourceNotFound from "../errors/resourceNotFound.exception.js";

const router = express.Router();
const productController = new ProductController();

router.post("/new", (req, res, next) =>
	productController.createProduct(req, res, next)
);
router.get("/", (req, res, next) =>
	productController.getProducts(req, res, next)
);
router.get("/:id", (req, res, next) =>
	productController.getProductById(req, res, next)
);

router.use((err, req, res, next) => {
	if (
		err instanceof ArgumentRequiredException ||
		err instanceof ResourceAlreadyExists
	) {
		return res.status(err.code || 400).json({ message: err.message });
	}
	if (err instanceof ResourceNotFound) {
		res.status(err.code || 404).json({ err: err.message });
	} else {
		next(err);
	}
});

export default router;
