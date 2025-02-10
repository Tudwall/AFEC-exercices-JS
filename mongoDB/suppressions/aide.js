// 2. Intermédiaire : Suppression logique avec timestamp

// Importer le module mongodb
import { MongoClient } from "mongodb";

const URI = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(URI);

// Fonction pour se connecter à la base de données
(async function () {
	try {
		// Se connecter à MongoDB
		await client.connect();

		// Sélectionner la base de données
		const db = client.db("deleteTests");

		// Supprimer la collection si elle existe
		try {
			await db.collection("tickets").drop();
		} catch (error) {
			console.info("La collection n'existe pas, pas de problème");
		}
		// Sélectionner la collection
		const tickets = db.collection("tickets");

		// Insérer des tickets de test
		const insertResult = await tickets.insertMany([
			{
				title: "Problème de connexion",
				description: "Impossible de se connecter à l'application",
				isDeleted: false,
				deletedAt: null,
				createdAt: new Date(),
			},
			{
				title: "Bug interface",
				description: "Le bouton de soumission ne répond pas",
				isDeleted: false,
				deletedAt: null,
				createdAt: new Date(),
			},
			{
				title: "Question API",
				description: "Documentation manquante pour l'endpoint /users",
				isDeleted: false,
				deletedAt: null,
				createdAt: new Date(),
			},
		]);

		console.log("Tickets insérés:", insertResult.insertedCount);

		// Créer un index
		// await tickets.createIndex({ deletedAt: 1 };

		// Marquer un ticket comme supprimé
		const deleteDate = new Date(); // Date de suppression

		const softDeleteResult = await tickets.updateOne(
			{ title: "Bug interface" }, // Sélectionner le ticket à supprimer par son titre
			{
				// Setter pour marquer le ticket comme supprimé et ajouter la date de suppression
				$set: {
					isDeleted: true,
					deletedAt: deleteDate,
				},
			}
		);

		// Afficher le nombre de documents modifiés
		console.log(
			"Ticket marqué comme supprimé:",
			softDeleteResult.modifiedCount
		);

		// Récupérer tous les tickets non supprimés
		const activeTickets = await tickets.find({ isDeleted: false }).toArray();
		console.log(
			"Tickets actifs:",
			// Formater les dates en chaînes de caractères
			activeTickets.map((ticket) => ({
				...ticket,
				createdAt: ticket.createdAt.toLocaleString(), // Formater la date de création
			}))
		);

		// Récupérer les tickets supprimés après une date spécifique
		const targetDate = new Date(); // Date cible

		targetDate.setHours(targetDate.getHours() - 1); // Date cible : il y a une heure

		const deletedTickets = await tickets
			.find({
				isDeleted: true,
				deletedAt: { $gt: targetDate }, // Récupérer les tickets supprimés après la date cible, $gt = Greater Than
			})
			.toArray();

		// Afficher les tickets supprimés après la date cible
		console.log(
			"Tickets supprimés après",
			targetDate.toLocaleString(),
			":",
			// Formater les dates en chaînes de caractères
			deletedTickets.map((ticket) => ({
				...ticket, // Copier les propriétés du ticket
				deletedAt: ticket.deletedAt.toLocaleString(), // Formater la date de suppression
				createdAt: ticket.createdAt.toLocaleString(), // Formater la date de suppression
			}))
		);
	} catch (error) {
		console.error("Erreur de connexion à la base de données", error);
	} finally {
		client.close();
	}
})();
