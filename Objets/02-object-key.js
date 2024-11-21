/* Créez un objet film avec les propriétés suivantes : titre, realisateur, anneeSortie et genre. Utilisez Object.keys(), Object.values(), et Object.entries() pour afficher les clés, les valeurs et les paires clé-valeur du film. */
let film = {
	titre: "Le Seigneur des Anneaux",
	real: "Peter Jackson",
	annee: 2001,
	genre: "fantasy",
};

console.log(Object.keys(film));
console.log(Object.values(film));
console.log(Object.entries(film));
