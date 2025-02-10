import UserService from "../services/user.services.js";
import { ArgumentRequiredException } from "../exceptions/exceptions.js";

class UserController {
  constructor(service) {
    this.service = service;
  }

  async findUserByEmail(req, res, next) {
    try {
      if (!req.body?.email) {
        throw new ArgumentRequiredException(400, "missing email info");
      }
      console.log(req.body);
      const user = await this.service.findUserByEmail(req.body.email);
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  // ----
  async getAllUsers(req, res, next) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      console.log("controller :" + err);
      // res.status(500).json({ message: "sthg blew up" });
      next(err);
    }
  }

  async createUser(req, res) {
    if (!req.body) {
      res.status(400).json({ message: "no body" });
    }
    let user;
    try {
      user = await UserService.createUser(req.body);
    } catch (err) {
      console.error(err);
    }
    res.status(201).json({ message: "user created", user: user });
  }

  async findUserById(req, res) {
    let user;
    try {
      user = await UserService.findUserById(req.params.id);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "server broke" });
    }
    res.status(200).json({ user: user });
  }

  async updateUser(req, res) {
    if (!req.body) {
      res.status(400).json({ message: "no body" });
    }
    let user;
    try {
      user = await UserService.updateUser(req.params.id, req.body);
    } catch (err) {
      console.error(err);
    }
    res.status(200).json({ message: "user updated", user: user });
  }

  async deleteUser(req, res) {
    try {
      await UserService.deleteUser(req.params.id);
    } catch (err) {
      console.error(err);
    }
    res.status(200).json({ message: "user deleted" });
  }
}

export default new UserController(UserService);
