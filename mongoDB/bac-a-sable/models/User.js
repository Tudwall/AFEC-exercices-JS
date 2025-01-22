import mongoose from "mongoose";

// Modèle user
const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true, select: false },
	profile: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Profile",
		required: true,
	},
	blogPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogPost" }],
	courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const User = mongoose.model("User", UserSchema);

export default User;
