/* Créez une fonction objectToStringArray qui prend un objet en entrée et retourne un tableau contenant des chaînes de caractères représentant les noms des propriétés de cet objet. */

function objectToStringArray(obj) {
	return Object.keys(obj);
}

// Exemple d'objet
const employee = {
	name: 'John',
	jobTitle: 'Software Engineer',
	age: 30,
};

console.log(objectToStringArray(employee)); // ["name", "jobTitle", "age"]
