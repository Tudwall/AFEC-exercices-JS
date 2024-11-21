/* Créez une fonction countNestedMembers qui prend un objet (potentiellement imbriqué) en entrée et retourne le nombre total de propriétés dans l'objet, y compris celles dans les objets imbriqués. */

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

function countNestedMembers(Obj) {
	let count = 0;

	function countNest(o) {
		for (let key in o) {
			count++;
			if (typeof o[key] === "object" && o[key] !== null) {
				countNest(o[key]);
			}
		}
	}

	countNest(Obj);
	return count;
}

console.log(countNestedMembers(entreprise));
