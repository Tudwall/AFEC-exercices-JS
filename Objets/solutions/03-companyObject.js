/*  Écrivez une fonction employesParPoste qui prend l'objet entreprise et un poste en paramètre et retourne un tableau des noms des employés occupant ce poste. 

Instructions :
1) Créer un objet : 
L'objet entreprise doit contenir les propriétés suivantes :

- nom (string) : Le nom de l'entreprise (par exemple, "TechCorp").
- secteur (string) : Le secteur d'activité de l'entreprise (par exemple, "Technologie").
- adresse (object) : Un objet contenant les informations de l'adresse de l'entreprise avec les propriétés suivantes :
        * rue (string) : L'adresse de la rue (par exemple, "123 rue de l'Innovation").
        * ville (string) : La ville où l'entreprise est située (par exemple, "Paris").
        * codePostal (string) : Le code postal (par exemple, "75000").
    - employes (array) : Un tableau d'objets représentant les employés de l'entreprise. Chaque employé possède les propriétés suivantes :
        *nom (string) : Le nom de l'employé (par exemple, "Alice").
        *poste (string) : Le poste de l'employé (par exemple, "Développeur", "Designer", etc.).
        *salaire (number) : Le salaire de l'employé (par exemple, 50000).
*/

const entreprise = {
	nom: 'TechCorp',
	secteur: 'Technologie',
	adresse: {
		rue: "123 rue de l'Innovation",
		ville: 'Paris',
		codePostal: '75000',
	},
	employes: [{ nom: 'Alice', poste: 'Développeur', salaire: 50000 }],
};

// Exemple d'affichage des données dans la console
console.log("Nom de l'entreprise : ", entreprise.nom); // Affiche "TechCorp"
console.log('Secteur : ', entreprise.secteur); // Affiche "Technologie"
console.log(
	'Adresse : ',
	entreprise.adresse.rue,
	entreprise.adresse.ville,
	entreprise.adresse.codePostal
);
// Affiche "123 rue de l'Innovation Paris 75000"

// Affichage des employés
entreprise.employes.forEach((employe) => {
	console.log(
		`${employe.nom} - ${employe.poste} - Salaire : ${employe.salaire}€`
	);
	// Affiche les informations de chaque employé
});

/* Ajoutez au moins 3 employés différents dans la propriété employes, chacun avec un nom, un poste et un salaire. */

/* Testez votre objet en affichant dans la console le nom de l'entreprise et l'adresse complète. */

// pour ajouter un salarié ...
entreprise.employes.push({
	nom: 'David',
	poste: 'Chef de projet',
	salaire: 60000,
});

// Ajout de 2 nouveaux employés à l'objet entreprise
entreprise.employes = entreprise.employes.concat([
	{ nom: 'Eve', poste: 'Responsable marketing', salaire: 45000 },
	{ nom: 'Frank', poste: 'Développeur backend', salaire: 60000 },
]);

console.log('2 nouveaux employées', entreprise);
// ou avec la syntaxe spread qui copie le contenu d'un tableau

entreprise.employes = [
	...entreprise.employes, // Ajoute les employés existants
	{ nom: 'Grace', poste: 'Designer UX', salaire: 50000 },
];

console.log('2 nouveaux employées', entreprise);
