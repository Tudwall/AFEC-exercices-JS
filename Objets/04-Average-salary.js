/* Créez un objet entreprise qui contient une liste d'employés. Chaque employé est représenté par un objet avec les propriétés suivantes :

    nom (ex. "Alice")
    poste (ex. "Développeur")
    salaire (ex. 45000) */

let entreprise = {
	employes: [
		{
			nom: "Alice",
			poste: "Développeur",
			salaire: 45000,
		},
		{
			nom: "Bob",
			poste: "Développeur",
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

/*   Créez une méthode calculerSalaireMoyen() dans l'objet entreprise qui calcule le salaire moyen de tous les employés de l'entreprise et retourne cette valeur. La méthode doit prendre en compte les employés présents dans le tableau employes. */

entreprise.calculerSalaireMoyen = function () {
	let avgPay = 0;
	let totalPay = 0;
	for (let employe of this.employes) {
		totalPay += employe.salaire;
	}
	avgPay = totalPay / this.employes.length;
	return "Le salaire moyen est de " + avgPay;
};
console.log(entreprise.calculerSalaireMoyen());
/* Cas de test :

    Cas standard : L'entreprise a 4 employés avec des salaires différents.
        Alice: salaire 45000€
        Bob: salaire 38000€
        Charlie: salaire 55000€
        David: salaire 42000€
        Le salaire moyen doit être de 45000€.

    Cas avec un seul employé : Si l'entreprise n'a qu'un seul employé.
        Alice: salaire 45000€
        Le salaire moyen doit être de 45000€.

    Cas avec des salaires identiques : Si tous les employés ont le même salaire.
        Alice: salaire 40000€
        Bob: salaire 40000€
        Charlie: salaire 40000€
        David: salaire 40000€
        Le salaire moyen doit être de 40000€.

    Cas avec des salaires à zéro : Si tous les employés ont un salaire de zéro.
        Alice: salaire 0€
        Bob: salaire 0€
        Charlie: salaire 0€
        David: salaire 0€
        Le salaire moyen doit être de 0€. */
