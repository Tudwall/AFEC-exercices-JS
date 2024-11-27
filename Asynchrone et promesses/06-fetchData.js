/* Niveau de difficulté : Intermédiaire
Contexte :

Imaginons que vous interagissez avec une API qui fournit des informations sur différents utilisateurs, mais certaines requêtes peuvent échouer (par exemple, si l'utilisateur n'existe pas). Vous devez envoyer des requêtes pour plusieurs utilisateurs et savoir si chacune a réussi ou échoué, tout en continuant à traiter les autres requêtes.
Instructions :

    Créez trois fonctions simulant des requêtes API pour récupérer des données utilisateur (chacune retournant une promesse).
        fetchUserData(id): Renvoie une promesse qui est résolue avec les données de l'utilisateur si l'ID est pair et rejetée si l'ID est impair (utilisez un délai aléatoire pour simuler le temps de réponse).

    Utilisez Promise.allSettled() pour attendre toutes les promesses, et affichez les résultats de toutes les requêtes.

        Si une promesse est résolue, affichez un message comme "Données récupérées pour l'utilisateur X".
        Si une promesse est rejetée, affichez un message comme "Erreur lors de la récupération des données pour l'utilisateur X". */

const fetchUserData = (...args) => {
	const delay = Math.floor(Math.random() * 2000);
	const users = [...args];
	return new Promise((resolve, reject) => {
		for (const user in users) {
			setTimeout(() => {
				if (user % 2 === 0) {
					console.log("ici");

					resolve(`Données récupérées pour l'utilisateur ${user}`);
				} else {
					console.log("là");

					reject(
						`Erreur lors de la récupération des données de l'utilisateur ${user}`
					);
				}
			}, delay);
		}

		Promise.allSettled([...args])
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.error("erreur", error);
				throw new Error(error);
			});
	});
};

fetchUserData(2500, 1555, 2356);
