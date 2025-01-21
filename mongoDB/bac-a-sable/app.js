import mongoose from "mongoose";
import dotenv from "dotenv/config";
import Profile from "./models/Profile.js";
import BlogPost from "./models/BlogPost.js";
import User from "./models/User.js";
import Student from "./models/Student.js";
import Course from "./models/Course.js";

mongoose.connect(process.env.URL_DATABASE);

const post1 = await BlogPost.create({
	title: "Premier Article",
	content: "Premier article texte",
});
const post2 = await BlogPost.create({
	title: "Deuxième Article",
	content: "Deuxième article texte",
});

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

// ---------------------------------------------------

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
