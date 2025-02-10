// src/repositories/user.repository.js

import User from '../models/user.model.js';

class UserRepository {
  async createUser({ name, email }) {
    try {
      const newUser = new User({ name, email });
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error("Erreur lors de la création de l'utilisateur");
    }
  }

  async getUsers() {
    try {
      return await User.find();
    } catch (error) {
      throw new Error('Erreur lors de la récupération des utilisateurs');
    }
  }

  async getUserById(id) {
    try {
      return await User.findById(id);
    } catch (error) {
      throw new Error("Erreur lors de la récupération de l'utilisateur");
    }
  }

  async updateUser(id, { name, email }) {
    try {
      return await User.findByIdAndUpdate(id, { name, email }, { new: true });
    } catch (error) {
      throw new Error("Erreur lors de la mise à jour de l'utilisateur");
    }
  }

  async deleteUser(id) {
    try {
      return await User.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("Erreur lors de la suppression de l'utilisateur");
    }
  }
}

export default UserRepository;
