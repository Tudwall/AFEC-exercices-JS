import userRepo from "../repositories/userRepository";

class userService {
	getAllUsers() {
		userRepo.getAll(callback);
	}
}

export default { userService };
