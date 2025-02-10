class UserController {
	async getAllUsers(req, res) {
		try {
			const users = await User.find();
			if (users) {
				res.status(200).json({
					users,
				});
			} else {
				res.status(404).json({
					message: `Aucun user trouvé`,
				});
				throw new Error("Aucun user trouvé");
			}
		} catch (err) {
			console.error(err);
			res.send(500).json({
				message: `server dead`,
			});
		}
	}

	async getUserById(req, res) {
		if (!req.params?.id) {
			res.status(400).json({
				message: `id required`,
			});
		}
		try {
			const id = req.params.id;
			const user = await User.findById(id);
			console.log(user);
			if (user.length !== 0) {
				res.status(200).json({
					user,
				});
			} else {
				res.status(404).json({
					message: `Error 404: User ${id} not found`,
				});
			}
		} catch (err) {
			res.send(err);
		}
	}

	async createUser(req, res) {
		try {
			if (!req.body?.name || !req.body?.email || !req.body?.password) {
				res.status(400).json({
					message: `missing data to create a user`,
				});
				throw new Error(err);
			} else {
				const user = {
					name: req.body.name,
					email: req.body.email,
					password: req.body.password,
				};
				const newUser = new User(user);
				await newUser.save();
				res.status(201).json({
					message: `New user created`,
				});
			}
		} catch (err) {
			res.send(err);
		}
	}
}

export default new UserController();
