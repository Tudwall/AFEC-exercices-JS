const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	id: Number,
	name: String, // String is shorthand for {type: String}
	email: String,
	age: Number,
	password: String,
	hidden: Boolean,
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
