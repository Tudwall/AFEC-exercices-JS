/* Niveau de difficulté : Intermédiaire
Contexte :

Imaginons que vous interagissez avec une API qui fournit des informations sur différents utilisateurs, mais certaines requêtes peuvent échouer (par exemple, si l'utilisateur n'existe pas). Vous devez envoyer des requêtes pour plusieurs utilisateurs et savoir si chacune a réussi ou échoué, tout en continuant à traiter les autres requêtes.
Instructions :

    Créez trois fonctions simulant des requêtes API pour récupérer des données utilisateur (chacune retournant une promesse).
        fetchUserData(id): Renvoie une promesse qui est résolue avec les données de l'utilisateur si l'ID est pair et rejetée si l'ID est impair (utilisez un délai aléatoire pour simuler le temps de réponse).

    Utilisez Promise.allSettled() pour attendre toutes les promesses, et affichez les résultats de toutes les requêtes.

        Si une promesse est résolue, affichez un message comme "Données récupérées pour l'utilisateur X".
        Si une promesse est rejetée, affichez un message comme "Erreur lors de la récupération des données pour l'utilisateur X". */

// Fonction simulant une requête API pour récupérer les données d'un utilisateur
function fetchUserData(id) {
	return new Promise((resolve, reject) => {
		// Simuler un délai aléatoire pour la requête API
		const delay = Math.random() * 2000 + 1000; // entre 1 et 3 secondes
		setTimeout(() => {
			if (id % 2 === 0) {
				resolve({
					id,
					name: `Utilisateur ${id}`,
					data: `Données de l'utilisateur ${id}`,
				});
			} else {
				reject(`Erreur: Utilisateur ${id} non trouvé`);
			}
		}, delay);
	});
}

// Liste des IDs d'utilisateurs à interroger
const userIds = [1, 2, 3, 4, 5];

// Utilisation de Promise.allSettled pour attendre que toutes les promesses se terminent
Promise.allSettled(userIds.map((id) => fetchUserData(id))).then((results) => {
	results.forEach((result) => {
		if (result.status === 'fulfilled') {
			console.log(
				`Données récupérées pour l'utilisateur ${result.value.id}: ${result.value.data}`
			);
		} else {
			console.log(
				`Erreur lors de la récupération des données pour l'utilisateur ${result.reason}`
			);
		}
	});
});
