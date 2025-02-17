import ProductRepository from "../repositories/product.repository.js";
import ArgumentRequiredException from "../errors/argumentRequired.exception.js";
import ResourceNotFound from "../errors/resourceNotFound.exception.js";

class ProductService {
	constructor() {
		this.productRepository = new ProductRepository();
	}

	async createProduct({ name, description, price }) {
		try {
			const newProduct = await this.productRepository.createProduct({
				name,
				description,
				price,
			});
			if (!newProduct) {
				throw new ArgumentRequiredException("Argument manquant");
			}
			return newProduct;
		} catch (err) {
			console.error(`erreur service: ${err}`);
			throw err;
		}
	}

	async getProducts() {
		try {
			const products = await this.productRepository.getProducts();
			return products;
		} catch (err) {
			console.error(`erreur service: ${err}`);
		}
	}

	async getProductById(id) {
		if (!id) {
			throw new ArgumentRequiredException("Id nécessaire");
		}

		try {
			const product = await this.productRepository.getProductById(id);
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
