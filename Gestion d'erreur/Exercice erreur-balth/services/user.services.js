import UserRepo from "../repositories/users.repository.js";
import { UserNotFoundException } from "../exceptions/exceptions.js";

class UserService {
  constructor(repository) {
    console.log("constructeur service");
    this.repository = repository;
  }

  async findUserByEmail(email) {
    const user = await this.repository.findUserByEmail(email);
    if (!user) {
      throw new UserNotFoundException(404, "user does not exist");
    }
    return user;
  }

  // ----
  async getAllUsers() {
    try {
      let users = await this.repository.getAllUsers();
      return users;
    } catch (err) {
      console.log("Service :" + err);
    }
  }

  async createUser(body) {
    return await this.repository.createUser(body);
  }

  async findUserById(id) {
    return await this.repository.getUserById(id);
  }

  async updateUser(id, body) {
    return await this.repository.updateUser(id, body);
  }

  async deleteUser(id) {
    return await this.repository.deleteUser(id);
  }
}

export default new UserService(UserRepo);

// routes appelle controleur
// controleur appelle service
// service appelle repository
