// src/routes/user.routes.js
import express from 'express';
import UserController from '../controllers/user.controller.js';

const router = express.Router();
const userController = new UserController();

// Assure-toi que tu utilises les bonnes méthodes du contrôleur
router.post('/', (req, res) => userController.createUser(req, res)); // Exemple pour POST
router.get('/', (req, res) => userController.getUsers(req, res)); // Exemple pour GET
router.get('/:id', (req, res) => userController.getUserById(req, res)); // Exemple pour GET par ID
router.put('/:id', (req, res) => userController.updateUser(req, res)); // Exemple pour PUT
router.delete('/:id', (req, res) => userController.deleteUser(req, res)); // Exemple pour DELETE

export default router;
