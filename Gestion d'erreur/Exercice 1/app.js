import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocumentUsers from './routes/user.swagger.json' with { type: 'json' };
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';
import userRoutes from './routes/user.routes.js';
import seedUsers from './core/seed.js';

dotenv.config();
const app = express();
const PORT = 3003;
const DOC = 'api-docs';

if (process.env.DB_TYPE === 'mongodb') {
  connectDB();
  seedUsers();
}


// Middleware pour parser les corps de requêtes en JSON
app.use(express.json());

// Afficher la documentation Swagger à l'URL /api-docs
app.use(
  `/${DOC}/users`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocumentUsers)
);
// Utilisation des routes utilisateur
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
  console.log(
    `La documentation est disponible sur sur http://localhost:${PORT}/${DOC}`
  );
});
