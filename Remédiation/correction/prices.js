// Tableau initial des prix

const prix = [20, 50, 15, 70, 30];

// 1. Appliquer une réduction de 10 % sur chaque prix et stocker les nouveaux prix dans un autre tableau

const prixReduits = prix.map((prix) => prix * 0.9);

// 2. Afficher chaque prix réduit avec le symbole €

prixReduits.forEach((prix) => {
	console.log(`${prix}€`);
});

// Bonus 1 : Afficher uniquement les prix inférieurs à 25€

prixReduits

	.filter((prix) => prix < 25)

	.forEach((prix) => {
		console.log(`${prix}€`);
	});

// Bonus 2 : Fonction avec un callback qui détermine si un prix doit être inclus

function filtrerPrix(prixTableau, callback) {
	return prixTableau.filter(callback);
}

// Condition pour inclure uniquement les prix pairs

const prixPairs = filtrerPrix(prix, (prix) => {
	return prix % 2 === 0;
});

console.log(prixPairs);

// Afficher les prix pairs

prixPairs.forEach((prix) => {
	console.log(`prix pairs ${prix}€`);
});
