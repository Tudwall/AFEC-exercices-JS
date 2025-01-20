const mongoose = require("mongoose");

const mongooseConnect = async () => {
	try {
		await mongoose.connect(process.env.URL_DATABASE);
	} catch (err) {
		console.error(`mongoose connection issue ${err}`);
		process.exit();
	}
};

module.exports = mongooseConnect;
