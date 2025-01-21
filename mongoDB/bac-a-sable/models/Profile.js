import mongoose from "mongoose";

// Modèle profil
const ProfileSchema = new mongoose.Schema({
	bio: String,
	website: String,
});

const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
