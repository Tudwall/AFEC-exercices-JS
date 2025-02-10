// src/controllers/user.controller.js
import ArgumentRequiredException from "../exceptions/exception.js";
import UserService from "../services/user.service.js";

class UserController {
	constructor() {
		console.log("constructeur service");
		this.userService = new UserService();
	}

	// CREATE - Créer un utilisateur
	async createUser(req, res) {
		console.log("controller ");
		const { name, email } = req.body;
		try {
			const newUser = await this.userService.createUser({ name, email });
			res.status(201).json(newUser);
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	}

	// READ - Obtenir tous les utilisateurs
	async getUsers(req, res, next) {
		try {
			console.log("controller ");
			const users = await this.userService.getUsers();
			res.status(200).json(users);
		} catch (error) {
			res.status(500).json({ error: error.message });
			next(error);
		}
	}

	async getUserByEmail(req, res) {
		if (!req.params?.email) {
			throw new ArgumentRequiredException(400, "email undefined in params");
		}
		try {
			const user = await this.userService.getUserByEmail(email);
			res.status(200).json(user);
		} catch (error) {
			res.status(404).json({ error: error.message });
		}
	}

	// READ - Obtenir un utilisateur par son ID
	async getUserById(req, res) {
		const { id } = req.params;
		try {
			const user = await this.userService.getUserById(id);
			res.status(200).json(user);
		} catch (error) {
			res.status(404).json({ error: error.message });
		}
	}

	// UPDATE - Mettre à jour un utilisateur
	async updateUser(req, res) {
		const { id } = req.params;
		const { name, email } = req.body;
		try {
			const updatedUser = await this.userService.updateUser(id, {
				name,
				email,
			});
			res.status(200).json(updatedUser);
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	}

	// DELETE - Supprimer un utilisateur
	async deleteUser(req, res) {
		const { id } = req.params;
		try {
			const result = await this.userService.deleteUser(id);
			res.status(200).json(result);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
}

export default UserController;
