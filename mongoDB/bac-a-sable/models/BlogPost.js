import mongoose from "mongoose";

// Modèle blog post
const BlogPostSchema = new mongoose.Schema({
	title: String,
	content: String,
	author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

export default BlogPost;
