/*  Écrivez une fonction employesParPoste qui prend l'objet entreprise et un poste en paramètre et retourne un tableau des noms des employés occupant ce poste. 

Instructions :
1) Créer un objet : 
- nom (string) : Le nom de l'entreprise (par exemple, "TechCorp").
- secteur (string) : Le secteur d'activité de l'entreprise (par exemple, "Technologie").
- employes (array) : Un tableau d'objets représentant les employés de l'entreprise. Chaque employé possède les propriétés suivantes :

    - nom (string) : Le nom de l'employé (par exemple, "Alice").
    - poste (string) : Le poste de l'employé (par exemple, "Développeur", "Designer", etc.).
    - salaire (number) : Le salaire de l'employé (par exemple, 45000).
*/

let entreprise = {
	nom: "TechCorp",
	secteur: "Technologie",
	adresse: {
		rue: "123, rue de l'Innovation",
		ville: "Paris",
		codePostal: "75000",
	},
	employes: [
		{
			nom: "Alice",
			poste: "Développeur",
			salaire: 45000,
		},
		{
			nom: "Bob",
			poste: "Designer",
			salaire: 38000,
		},
		{
			nom: "Charlie",
			poste: "Développeur",
			salaire: 55000,
		},
		{
			nom: "David",
			poste: "Développeur",
			salaire: 42000,
		},
	],
};

/*
2) Créez une fonction employesParPoste qui prend un poste (par exemple, "Développeur") en paramètre.
La fonction doit retourner un tableau contenant les noms des employés qui occupent ce poste.
*/

function employesParPoste(entreprise, poste) {
	let employesAuPoste = [];
	for (let employe of entreprise.employes) {
		if (employe.poste == poste) {
			employesAuPoste.push(employe.nom);
		}
	}
	return employesAuPoste;
}

const result2 = employesParPoste(entreprise, "Designer");
console.log(result2); // ["Bob"]

// Test pour un poste qui n'existe pas
const result3 = employesParPoste(entreprise, "Manager");
console.log(result3); // []
