// src/routes/user.routes.js
import express from "express";
import UserController from "../controllers/user.controller.js";

const router = express.Router();
const userController = new UserController();

// Assure-toi que tu utilises les bonnes méthodes du contrôleur
router.post("/", (req, res) => userController.createUser(req, res)); // Exemple pour POST
router.get("/", (req, res, next) => userController.getUsers(req, res, next)); // Exemple pour GET
router.get("/:id", (req, res) => userController.getUserById(req, res)); // Exemple pour GET par ID
router.put("/:id", (req, res) => userController.updateUser(req, res)); // Exemple pour PUT
router.delete("/:id", (req, res) => userController.deleteUser(req, res)); // Exemple pour DELETE

// Middleware d'erreur
router.use((err, req, res, next) => {
	const name = err.name;
	const status = err.status ? err.status : 500;
	const message = status === 500 ? "Server error" : err.message;
	res.status(status).json({ name, status, message });
});

export default router;
