/* Créez un objet film avec les propriétés suivantes : titre, realisateur, anneeSortie et genre. Utilisez Object.keys(), Object.values(), et Object.entries() pour afficher les clés, les valeurs et les paires clé-valeur du film. */

let film = {
	titre: 'Inception',
	realisateur: 'Christopher Nolan',
	anneeSortie: 2010,
	genre: 'Science-fiction',
};

// Afficher les clés
console.log('Clés :', Object.keys(film));
// Affiche : Clés : ["titre", "realisateur", "anneeSortie", "genre"]

// Afficher les valeurs
console.log('Valeurs :', Object.values(film));
// Affiche : Valeurs : ["Inception", "Christopher Nolan", 2010, "Science-fiction"]

// Afficher les paires clé-valeur
console.log('Entrées :');
for (let [cle, valeur] of Object.entries(film)) {
	console.log(cle + ': ' + valeur);
}
// Affiche :
// titre: Inception
// realisateur: Christopher Nolan
// anneeSortie: 2010
// genre: Science-fiction
