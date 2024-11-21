/* Créez deux objets représentant des employés. L'un contient les informations de base (nom, poste), et l'autre contient des informations supplémentaires (salaire, date de naissance).  */

let mainInfo = {
	nom: "David",
	poste: "Développeur",
};

let supInfo = {
	salaire: 45000,
	birthday: "15/08/1986",
};

/* Utilisez Object.assign() pour fusionner ces deux objets en un seul. */

let aggrInfo = Object.assign(mainInfo, supInfo);

/* Ensuite, créez un autre objet contenant l'adresse postale de l'employé avec les propriétés suivantes :
street (rue)
city (ville)
zipcode (code postal) */

let employeAddress = {
	street: "123 rue de l'Innovation",
	city: "Paris",
	zipcode: "75000",
};

let autre = {
	key1: "test",
};

/* Utilisez l'opérateur spread (...) pour ajouter l'adresse postale à l'objet de l'employé, puis affichez l'objet final combiné qui contient à la fois les informations personnelles et l'adresse de l'employé.
 */
let completeInfo = { ...aggrInfo, ...autre, ...employeAddress };
console.log(completeInfo);
