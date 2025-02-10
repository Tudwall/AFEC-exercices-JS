import mongoose from 'mongoose';

// Définir le schéma utilisateur
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// Créer et exporter le modèle utilisateur
const User = mongoose.model('User', userSchema);

export default User;
