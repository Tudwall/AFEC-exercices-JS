import mongoose from "mongoose";

const SIUserSchema = new mongoose.Schema({
	pfp: { type: String },
	name: { type: String, required: true },
	desc: { type: String },
	password: { type: String, required: true, select: false },
	collection: { type: Array, required: true },
	wishlist: { type: Array, required: true },
	reviews: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Reviews",
	},
});

const SIUser = mongoose.model("SIUser", SIUserSchema);

export default SIUser;
