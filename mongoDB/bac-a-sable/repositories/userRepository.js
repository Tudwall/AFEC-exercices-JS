import mongoose from "mongoose";

class userRepo {
	getAll() {
		mongoose.model("users").find(callback);
	}
}

export default { userRepo };
