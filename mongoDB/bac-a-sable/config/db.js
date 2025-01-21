import mongoose from "mongoose";

const mongooseConnect = async () => {
	try {
		await mongoose.connect(process.env.URL_DATABASE);
		console.log("mongoose is connected to database");
	} catch (err) {
		console.error(`mongoose connection issue ${err}`);
		process.exit();
	}
};

export default mongooseConnect;
