import mongoose from "mongoose";
import dotenv from "dotenv/config";

mongoose.connect(process.env.URL_DATABASE);

// Modèle profil
const ProfileSchema = new mongoose.Schema({
	bio: String,
	website: String,
});

const Profile = mongoose.model("Profile", ProfileSchema);

// Modèle blog post
const BlogPostSchema = new mongoose.Schema({
	title: String,
	content: String,
	author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

const post1 = await BlogPost.create({
	title: "Premier Article",
	content: "Premier article texte",
});
const post2 = await BlogPost.create({
	title: "Deuxième Article",
	content: "Deuxième article texte",
});

// Modèle user
const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	profile: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Profile",
		required: true,
	},
	blogPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogPost" }],
});

const User = mongoose.model("User", UserSchema);

const profil = await Profile.create({ bio: "dev web", website: "localhost" });

const user = new User({
	name: "John Doe",
	email: "john@doe.com",
	password: "123",
	profile: profil._id,
});

user.blogPosts = [post1._id, post2._id];
console.log(user);
await user.save();

const userWithProfile = await User.findById(user._id).populate("profile");

const userWithPosts = await User.findById(user._id).populate("blogPosts");

console.log(userWithProfile);

// ----------------------------------------------------

// Modèle d'étudiant
const StudentSchema = new mongoose.Schema({
	name: String,
	email: String,
	courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const Student = mongoose.model("Student", StudentSchema);

// Modèle de cours
const CourseSchema = new mongoose.Schema({
	title: String,
	description: String,
	students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

const Course = mongoose.model("Course", CourseSchema);

const student1 = new Student({
	name: "Charlie",
	email: "Charlie@example.com",
});

const student2 = new Student({
	name: "Dana",
	email: "dana@example.com",
});

const course1 = new Course({
	title: "Physique",
	description: "Cours de physique",
});

const course2 = new Course({
	title: "Maths",
	description: "cours de maths",
});

student1.courses = [course1._id, course2._id];
student2.courses = [course2._id];

await student1.save();
await student2.save();

course1.students = [student1._id];
course2.students = [student1._id, student2._id];

await course1.save();
await course2.save();
