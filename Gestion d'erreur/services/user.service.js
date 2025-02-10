// src/services/user.service.js
/* 
import UserRepository from '../repositories/user.maria.repository.js'; */

import UserRepository from '../repositories/user.mongo.repository.js';

class UserService {
  constructor(userService) {
    this.userRepository = new UserRepository(); // Injecter un UserService avec sa dépendance (UserRepository)
  }

  async createUser({ name, email }) {
    try {
      return await this.userRepository.createUser({ name, email });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUsers() {
    try {
      console.log('service get users');
      return await this.userRepository.getUsers();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUserById(id) {
    try {
      const user = await this.userRepository.getUserById(id);
      if (!user) {
        throw new Error('Utilisateur non trouvé');
      }
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateUser(id, { name, email }) {
    try {
      const updatedUser = await this.userRepository.updateUser(id, {
        name,
        email,
      });
      if (!updatedUser) {
        throw new Error('Utilisateur non trouvé');
      }
      return updatedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteUser(id) {
    try {
      const deletedUser = await this.userRepository.deleteUser(id);
      if (!deletedUser) {
        throw new Error('Utilisateur non trouvé');
      }
      return { message: 'Utilisateur supprimé' };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default UserService;
