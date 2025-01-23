import mongoose from "mongoose";

const SIReleaseSchema = new mongoose.Schema({
	cover: { type: String, required: true },
	title: { type: String, required: true },
	release_id: { type: String, required: true },
	artists: { type: String, required: true },
	release_date: { type: String, required: true },
	note: { type: Number, min: 0, max: 5 },
});

const SIRelease = mongoose.model("SIRelease", SIReleaseSchema);

export default SIRelease;
