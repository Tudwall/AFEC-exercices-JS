// Définition de l'objet entreprise avec un tableau d'employés
const entreprise = {
	nom: 'TechCorp', // Nom de l'entreprise
	secteur: 'Technologie', // Secteur de l'entreprise
	employes: [
		// Liste des employés
		{ nom: 'Alice', poste: 'Développeur', salaire: 45000 },
		{ nom: 'Bob', poste: 'Designer', salaire: 38000 },
		{ nom: 'Charlie', poste: 'Chef de projet', salaire: 55000 },
		{ nom: 'David', poste: 'Responsable marketing', salaire: 42000 },
	],

	// Méthode pour calculer le salaire moyen
	calculerSalaireMoyen: function () {
		const totalSalaire = this.employes.reduce((accumulateur, employe) => {
			return accumulateur + employe.salaire;
		}, 0);

		const salaireMoyen = totalSalaire / this.employes.length; // Calcul du salaire moyen
		return salaireMoyen;
	},
};

// Cas de test 1 : Affichage du salaire moyen pour l'entreprise avec 4 employés
const salaireMoyen1 = entreprise.calculerSalaireMoyen();
console.log(`Le salaire moyen de l'entreprise est : ${salaireMoyen1}€`); // 45000€

/* Cas de test 2 : Modification de l'entreprise pour un seul employé */
entreprise.employes = [{ nom: 'Alice', poste: 'Développeur', salaire: 45000 }];
const salaireMoyen2 = entreprise.calculerSalaireMoyen();
console.log(
	`Le salaire moyen de l'entreprise avec un seul employé est : ${salaireMoyen2}€`
); // 45000€

/* Cas de test 3 : Modification de l'entreprise avec des salaires identiques */
entreprise.employes = [
	{ nom: 'Alice', poste: 'Développeur', salaire: 40000 },
	{ nom: 'Bob', poste: 'Designer', salaire: 40000 },
	{ nom: 'Charlie', poste: 'Chef de projet', salaire: 40000 },
	{ nom: 'David', poste: 'Responsable marketing', salaire: 40000 },
];
const salaireMoyen3 = entreprise.calculerSalaireMoyen();
console.log(
	`Le salaire moyen de l'entreprise avec des salaires identiques est : ${salaireMoyen3}€`
); // 40000€

/* Cas de test 4 : Modification de l'entreprise avec des salaires à zéro */
entreprise.employes = [
	{ nom: 'Alice', poste: 'Développeur', salaire: 0 },
	{ nom: 'Bob', poste: 'Designer', salaire: 0 },
	{ nom: 'Charlie', poste: 'Chef de projet', salaire: 0 },
	{ nom: 'David', poste: 'Responsable marketing', salaire: 0 },
];
const salaireMoyen4 = entreprise.calculerSalaireMoyen();
console.log(
	`Le salaire moyen de l'entreprise avec des salaires à zéro est : ${salaireMoyen4}€`
); // 0€
