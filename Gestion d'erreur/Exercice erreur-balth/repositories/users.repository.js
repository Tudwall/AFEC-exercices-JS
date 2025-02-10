let users = [
  {
    name: "Bertrand",
    email: "bt@mail.com",
  },
  {
    name: "Bernard",
    email: "bn@mail.fr",
  },
];

class UserRepo {
  async findUserByEmail(email) {
    try {
      const user = await new Promise((resolve) =>
        setTimeout(() => {
          users = users.filter((user) => user.email === email);
          if (users.length) {
            resolve(users[0]);
          } else {
            resolve(null);
          }
        }, Math.random() * 1000)
      );
      return user;
    } catch (err) {
      console.error(err);
      throw new Error("issue while connecting to database");
    }
  }

  // ----
  async getAllUsers() {
    return await new Promise((resolve, reject) =>
      setTimeout(() => {
        reject("users missing");
      }, Math.random() * 1000)
    );
  }

  async getUserById(id) {
    return await new Promise((resolve) =>
      setTimeout(() => {
        resolve(users.find((user) => user.id == id));
      }, Math.random() * 1000)
    );
  }

  async createUser(body) {
    return await new Promise((resolve) =>
      setTimeout(() => {
        let user = {
          name: body.name,
          age: body.age,
          id: this.make_id(),
        };
        users.push(user);
        resolve(user);
      }, Math.random() * 1000)
    );
  }

  make_id() {
    let id = Math.ceil(Math.random() * 100000);
    while (users.find((user) => user.id == id).length) {
      id = Math.ceil(Math.random() * 100000);
    }
    return id;
  }

  async updateUser(id, body) {
    return await new Promise((resolve) =>
      setTimeout(() => {
        const user = users.find((user) => user.id == id);
        user.name = body.name;
        user.name = body.age;
        resolve(user);
      }, Math.random() * 1000)
    );
  }

  async deleteUser(id) {
    return await new Promise((resolve) =>
      setTimeout(() => {
        users = users.filter((user) => user.id != id);
        resolve(true);
      }, Math.random() * 1000)
    );
  }
}

export default new UserRepo();
