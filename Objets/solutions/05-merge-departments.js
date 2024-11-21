/* Créez deux objets représentant des employés. L'un contient les informations de base (nom, poste), et l'autre contient des informations supplémentaires (salaire, date de naissance).  */

/* Utilisez Object.assign() pour fusionner ces deux objets en un seul. */

/* Ensuite, créez un autre objet contenant l'adresse postale de l'employé avec les propriétés suivantes :
street (rue)
city (ville)
zipcode (code postal) */

/* Utilisez l'opérateur spread (...) pour ajouter l'adresse postale à l'objet de l'employé, puis affichez l'objet final combiné qui contient à la fois les informations personnelles et l'adresse de l'employé.
 */
const employeDeBase = {
	nom: 'Alice',
	poste: 'Développeur',
};

const infosSuppl = {
	salaire: 45000,
	dateNaissance: '1990-05-15',
};

const address = {
	street: '123 Main St',
	city: 'New York',
	zipcode: '10001',
};

// Object.assign
const employeComplet = Object.assign({}, employeDeBase, infosSuppl);
console.log(employeComplet);

// version plus modern
const employeCompletWithAddress = {
	...employeComplet,
	...infosSuppl,
};
