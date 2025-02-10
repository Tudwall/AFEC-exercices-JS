import User from '../models/user.model.js';

export default async function seedUsers() {
  try {
    // Effacer les utilisateurs existants (facultatif)
    await User.deleteMany({});

    // Créer de nouveaux utilisateurs
    const users = [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'password456',
      },
      {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'password789',
      },
    ];

    // Insérer les utilisateurs dans la base de données
    await User.insertMany(users);
    console.log('Users seeded successfully');
  } catch (err) {
    console.error('Error seeding users:', err);
  }
}
