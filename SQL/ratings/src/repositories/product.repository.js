import pool from "../db/connection.js";
import ArgumentRequiredException from "../errors/argumentRequired.exception.js";
import DatabaseException from "../errors/database.exception.js";

class ProductRepository {
	async createProduct({ name, description, price }) {
		let conn;
		try {
			conn = await pool.getConnection();
			return await conn.query(
				"INSERT INTO products (name, description, price) VALUES (?, ?, ?) RETURNING *",
				[name, description, price]
			);
		} catch (err) {
			console.error(`erreur repo: ${err}`);
			if (err.name === "SqlError") {
				throw new DatabaseException("Erreur base de données");
				// Demander à Marine comment récupérer le code d'erreur SQL
				/* if (err[1] === 1062) {
					throw new ResourceAlreadyExists("Le produit existe déjà");
				} else {
					throw new DatabaseException("Erreur base de donnée");
				} */
			}
		} finally {
			if (conn) conn.release();
		}
	}

	async getProducts() {
		let conn;
		try {
			conn = await pool.getConnection();
			return await conn.query("SELECT * FROM products");
		} catch (err) {
			console.error(`erreur repo: ${err}`);
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
			console.error(`erreur repo: ${err}`);
			throw new Error(
				`Erreur lors de la récupération du produit: ${id}` + err.message
			);
		}
	}
}

export default ProductRepository;
