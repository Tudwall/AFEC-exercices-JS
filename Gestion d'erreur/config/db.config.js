import mongoose from 'mongoose';

// Fonction pour se connecter à la base de données
export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Arrêter l'application en cas d'échec de la connexion
  }
};

export default connectDB;
