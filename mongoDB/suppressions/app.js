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
			await db.collection("products").drop();
		} catch (error) {
			console.info("La collection n'existe pas, pas de problème");
		}

		// Message de succès
		console.log(`Connexion à la base de données ${db.databaseName} réussie`);

		// Définir le schéma de validation pour la collection products
		const productSchema = {
			$jsonSchema: {
				bsonType: "object",
				required: ["name", "price"],
				properties: {
					name: {
						bsonType: "string",
						description: "Name must be a string",
					},
					price: {
						bsonType: ["int", "double", "decimal"],
						description: "Price can be whole or decimal number",
					},
					isDeleted: {
						bsonType: "bool",
						description: "isDeleted needs to be false or true (boolean)",
					},
					deletedAt: {
						bsonType: ["date", "null"],
						description: "Deleted at default value is null",
					},
				},
			},
		};

		// Créer une collection avec un schéma de validation
		const productCollection = await db.createCollection("products", {
			validator: productSchema,
		});

		// Récupérer la collection products
		const products = db.collection("products");

		// console.info("Documents supprimés avec succès", cursorDelete);

		// Créer un index
		await products.createIndex({ name: 1 }, { unique: true });

		// Inserrer un document valide dans la collection
		const validCursorInsertion = await products.insertMany([
			{ name: "Produit 1", price: 100.0, isDeleted: false },
			{ name: "Produit 2", price: 299.99, isDeleted: false },
			{ name: "Produit 3", price: 399.99, isDeleted: false },
		]);

		// Insérer un document non-valide dans la collection
		/* const invalidCursorInsertion = await products.insertMany([
			{ price: 100, isDeleted: false },
			{ name: "Produit 2", price: 200, isDeleted: false },
			{ name: "Produit 3", price: 300, isDeleted: false },
		]);

		console.info("Documents insérés avec succès", cursorInsertion); */

		// Marquer un document comme supprimé (isDeleted: true)
		const cursorUpdate = await products.updateOne(
			// Soft Delete
			{ name: "Produit 1" },
			{ $set: { isDeleted: true, deletedAt: new Date() } }
		);

		// console.info("Document mis à jour avec succès", cursorUpdate);

		// Récupérer les documents uniquement si isDeleted est à false
		const productList = await products.find().toArray();
		// toArray() car le cursor ne contient pas que le référencement

		// Afficher les documents récupérés
		console.info("Documents récupérés avec succès ✅", productList);
	} catch (error) {
		console.error("Fatality ❌ :", error);
	} finally {
		await client.close(); // Fermer la connexion MongoDB
	}
})();

// Executer la function
// run();
