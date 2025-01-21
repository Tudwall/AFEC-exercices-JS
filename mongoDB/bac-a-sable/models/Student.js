import mongoose from "mongoose";

// Modèle d'étudiant
const StudentSchema = new mongoose.Schema({
	name: String,
	email: String,
	courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const Student = mongoose.model("Student", StudentSchema);

export default Student;
