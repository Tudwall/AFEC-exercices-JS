const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
