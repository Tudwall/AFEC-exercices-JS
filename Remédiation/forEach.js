/* Affichage des Sneakers : Afficher la liste des sneakers. Chaque
sneaker doit être affichée avec son nom, marque, taille, prix et
disponibilité. */

let sneakers = [
	{
		name: "Air Jordan 1",
		brand: "Nike",
		size: 10,
		price: 150,
		available: true,
	},
	{
		name: "Yeezy Boost 350",
		brand: "Adidas",
		size: 9,
		price: 220,
		available: false,
	},
	{
		name: "Chuck Taylor All Star",
		brand: "Converse",
		size: 8,
		price: 60,
		available: true,
	},
	{
		name: "UltraBoost",
		brand: "Adidas",
		size: 11,
		price: 180,
		available: true,
	},
	{
		name: "Air Max 90",
		brand: "Nike",
		size: 10,
		price: 120,
		available: false,
	},
];

sneakers.forEach((sneaker) => {
	console.log(
		`Modèle: ${sneaker.name} Marque: ${sneaker.brand} Taille: ${sneaker.size} Prix: ${sneaker.price} Dispo: ${sneaker.available}`
	);
});
