import mongoose from "mongoose";

// Modèle de cours
const CourseSchema = new mongoose.Schema({
	title: String,
	description: String,
	students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

const Course = mongoose.model("Course", CourseSchema);

export default Course;
