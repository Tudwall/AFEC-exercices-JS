import mongoose from "mongoose";

const SIReviewSchema = new mongoose.Schema({
	release_id: {
		type: Number,
		required: true,
	},
	note: { type: Number, min: 0, max: 5, required: true },
});

const SIReview = mongoose.model("SIReview", SIReviewSchema);

export default SIReview;
