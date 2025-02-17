import ProductService from "../services/product.service.js";

class ProductController {
	constructor() {
		this.productService = new ProductService();
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
