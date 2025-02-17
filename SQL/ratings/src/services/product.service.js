import ProductRepository from "../repositories/product.repository.js";
import ArgumentRequiredException from "../errors/argumentRequired.exception.js";
import ResourceNotFound from "../errors/resourceNotFound.exception.js";

class ProductService {
	constructor() {
		this.productRepository = new ProductRepository();
	}

	async getProducts() {
		try {
			const products = await this.productRepository.getProducts();
			return products;
		} catch (err) {
			console.error(err);
		}
	}

	async getProductById(id) {
		if (!id) {
			throw new ArgumentRequiredException("Id nécessaire");
		}

		try {
			const product = await this.productRepository.getProductById(id);
			console.log(product);
			if (!product) {
				throw new ResourceNotFound("Produit introuvable");
			}
			return product;
		} catch (err) {
			console.error(`erreur service ${err}`);
			throw err;
		}
	}
}

export default ProductService;
