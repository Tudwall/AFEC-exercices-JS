import express from "express";
import dotenv from "dotenv/config";
import mongooseConnect from "./config/db.js";
import Profile from "./models/Profile.js";
import BlogPost from "./models/BlogPost.js";
import User from "./models/User.js";
import Course from "./models/Course.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

mongooseConnect();

app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, (req, res) => {
	console.info(`server running on ${PORT}`);
});

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

const profil1 = new Profile({ bio: "élève 1" });
const profil2 = new Profile({ bio: "élève 2" });

const user1 = new User({
	name: "Charlie",
	email: "Charlie@example.com",
	password: "azerty",
	profile: profil1._id,
});

const user2 = new User({
	name: "Dana",
	email: "dana@example.com",
	password: "azerty",
	profile: profil2._id,
});

const course1 = new Course({
	title: "Physique",
	description: "Cours de physique",
});

const course2 = new Course({
	title: "Maths",
	description: "cours de maths",
});

user1.courses = [course1._id, course2._id];
user2.courses = [course2._id];

await user1.save();
await user2.save();

course1.students = [user1._id];
course2.students = [user1._id, user2._id];

await course1.save();
await course2.save();
