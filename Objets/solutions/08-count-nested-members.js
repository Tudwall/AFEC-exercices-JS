function countNestedMembers(obj) {
	let count = 0;

	// Fonction récursive pour parcourir l'objet imbriqué
	function countProps(o) {
		for (let key in o) {
			count++; // Comptabilise la propriété
			if (typeof o[key] === 'object' && o[key] !== null) {
				countProps(o[key]); // Appel récursif pour les objets imbriqués
			}
		}
	}

	countProps(obj); // Appelle la fonction récursive sur l'objet initial
	return count;
}

// Exemple d'objet imbriqué
const company = {
	name: 'TechCorp',
	employees: {
		count: 150,
		departments: {
			engineering: 50,
			marketing: 30,
		},
	},
	location: 'New York',
};

console.log(countNestedMembers(company)); // 7 (name, employees, count, departments, engineering, marketing, location)
