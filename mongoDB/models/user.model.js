const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);
const { Schema } = mongoose;

const userSchema = new Schema({
	name: String, // String is shorthand for {type: String}
	email: String,
	age: Number,
	password: String,
	hidden: Boolean,
});

userSchema.plugin(autoIncrement, { inc_field: "id" });

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
