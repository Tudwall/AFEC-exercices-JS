import ArgumentRequiredException from "../errors/argumentRequired.exception.js";
import DatabaseException from "../errors/database.exception.js";
import ResourceAlreadyExists from "../errors/resourceAlreadyExists.exception.js";
import ProductService from "../services/product.service.js";

class ProductController {
	constructor() {
		this.productService = new ProductService();
	}

	async createProduct(req, res, next) {
		const { name, description, price } = req.body;
		try {
			if (!{ name, description, price }) {
				res.status(400).json({ err: "Argument manquant" });
				throw new ArgumentRequiredException("Argument manquant");
			}
			const newProduct = this.productService.createProduct({
				name,
				description,
				price,
			});

			res.status(201).json({ newProduct });
		} catch (err) {
			next(err);
		}
	}

	async getProducts(req, res, next) {
		try {
			const products = this.productService.getProducts();
			res.status(200).json({ products });
		} catch (err) {
			next(err);
		}
	}

	async getProductById(req, res, next) {
		try {
			const { id } = req.params;
			const product = await this.productService.getProductById(id);
			if (!product) {
				return res.status(404).json({ error: "Produit introuvable" });
			}
			res.json(product);
		} catch (err) {
			next(err);
		}
	}
}

export default ProductController;
