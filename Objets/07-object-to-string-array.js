/* Créez une fonction objectToStringArray qui prend un objet en entrée et retourne un tableau contenant des chaînes de caractères représentant les noms des propriétés de cet objet. */

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

function objectToStringArray(Obj) {
	return Object.keys(Obj);
}

console.log(objectToStringArray(entreprise));
