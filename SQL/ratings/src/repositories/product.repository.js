import pool from "../db/connection.js";

class ProductRepository {
	async getProducts() {
		let conn;
		try {
			conn = await pool.getConnection();
			return await conn.query("SELECT * FROM products");
		} catch (err) {
			console.error(err);
			throw new Error(
				"Erreur lors de la récupération des produits" + err.message
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async getProductById(id) {
		let conn;
		try {
			conn = await pool.getConnection();
			const rows = await conn.query("SELECT * FROM products WHERE id = ?", [
				id,
			]);
			return rows[0] || null;
		} catch (err) {
			console.error(`erreur repo ${err}`);
			throw new Error(
				`Erreur lors de la récupération du produit: ${id}` + err.message
			);
		}
	}
}

export default ProductRepository;
