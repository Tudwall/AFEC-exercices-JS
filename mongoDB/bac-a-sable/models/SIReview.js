import mongoose from "mongoose";

const SIReviewSchema = new mongoose.Schema({
	release_id: {
		type: Number,
		required: true,
	},
	note: { type: Number, min: 0, max: 5, required: true },
	release: { type: mongoose.Schema.Types.ObjectId, ref: "SIRelease" },
});

const SIReview = mongoose.model("SIReview", SIReviewSchema);

export default SIReview;
