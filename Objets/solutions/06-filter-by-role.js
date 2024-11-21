/*   1) Créer un objet : 
- nom (string) : Le nom de l'entreprise (par exemple, "TechCorp").
- secteur (string) : Le secteur d'activité de l'entreprise (par exemple, "Technologie").
- employes (array) : Un tableau d'objets représentant les employés de l'entreprise. Chaque employé possède les propriétés suivantes :

    - nom (string) : Le nom de l'employé (par exemple, "Alice").
    - poste (string) : Le poste de l'employé (par exemple, "Développeur", "Designer", etc.).
    - salaire (number) : Le salaire de l'employé (par exemple, 45000).
 */

const entreprise = {
	nom: 'TechCorp',
	secteur: 'Technologie',
	employes: [
		{ nom: 'Alice', poste: 'Développeur', salaire: 50000 },
		{ nom: 'Bob', poste: 'Designer', salaire: 40000 },
		{ nom: 'Charlie', poste: 'Développeur', salaire: 55000 },
		{ nom: 'David', poste: 'Chef de projet', salaire: 60000 },
	],
};

/*     Créez une fonction employesParPoste qui prend un poste (par exemple, "Développeur") en paramètre.
La fonction doit retourner un tableau contenant les noms des employés qui occupent ce poste.*/

function employesParPoste(entreprise, poste) {
	return entreprise.employes
		.filter((employe) => employe.poste === poste) // Filtrer les employés par poste
		.map((employe) => employe.nom); // Extraire seulement les noms des employés
}

const result2 = employesParPoste(entreprise, 'Designer');
console.log(result2); // ["Bob"]

const result4 = employesParPoste(entreprise, 'Développeur');
console.log(result4); // ["Bob"]

// Test pour un poste qui n'existe pas
const result3 = employesParPoste(entreprise, 'Manager');
console.log(result3); // []
