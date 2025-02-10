import express from "express";
import UserController from "../controllers/users.controller.js";

const router = express.Router();

router.post("/email", (req, res, next) => {
  console.log("route des emails");
  UserController.findUserByEmail(req, res, next);
});

// ----
router.get("/", UserController.getAllUsers);

router.post("/", UserController.createUser);

// route middleware => check for id existence
router.use("/:id", async (req, res, next) => {
  if (!req.params?.id) {
    res.status(400).send("request is missing id");
  }
  next();
});

router.get("/user/:id", UserController.findUserById);

router.put(":id", UserController.updateUser);

router.delete(":id", UserController.deleteUser);

//  Middleware d'erreur
router.use((err, req, res, next) => {
  const name = err.name || "Erreur inconnue";
  const status = err.status || 500;
  const message = status === 500 ? "ServerError" : err.message;
  res.status(status).json({ name, status, message });
});

export default router;
