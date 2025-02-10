import mariadb from "mariadb";

class UserRepository {
	constructor() {
		this.pool = mariadb.createPool({
			host: "localhost",
			user: process.env.MARIADB_USER,
			password: process.env.MARIADB_USER,
			database: process.env.MARIADB_DB,
			connectionLimit: 5,
		});
	}

	async createUser({ name, email }) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const result = await conn.query(
				"INSERT INTO users (name, email) VALUES (?, ?)",
				[name, email]
			);
			return { id: result.id, name, email };
		} catch (error) {
			throw new Error(
				"Erreur lors de la création de l'utilisateur : " + error.message
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async getUsers() {
		let conn;
		try {
			conn = await this.pool.getConnection();
			return await conn.query("SELECT * FROM users");
		} catch (error) {
			throw new Error(
				"Erreur lors de la récupération des utilisateurs : " + error.message
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async getUserByEmail(email) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const rows = await conn.query("SELECT * FROM users WHERE email = ?", [
				email,
			]);
		} catch (error) {
			throw new Error(
				"Erreur lors de la récupération de l'utilisateur: " + error.message
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async getUserById(id) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const rows = await conn.query("SELECT * FROM users WHERE id = ?", [id]);
			return rows[0] || null;
		} catch (error) {
			throw new Error(
				"Erreur lors de la récupération de l'utilisateur : " + error.message
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async updateUser(id, { name, email }) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const result = await conn.query(
				"UPDATE users SET name = ?, email = ? WHERE id = ?",
				[name, email, id]
			);
			if (result.affectedRows === 0) throw new Error("Utilisateur non trouvé");
			return { id, name, email };
		} catch (error) {
			throw new Error(
				"Erreur lors de la mise à jour de l'utilisateur : " + error.message
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async deleteUser(id) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const result = await conn.query("DELETE FROM users WHERE id = ?", [id]);
			if (result.affectedRows === 0) throw new Error("Utilisateur non trouvé");
			return { message: "Utilisateur supprimé avec succès" };
		} catch (error) {
			throw new Error(
				"Erreur lors de la suppression de l'utilisateur : " + error.message
			);
		} finally {
			if (conn) conn.release();
		}
	}
}

export default UserRepository;
