/* Créez une fonction deepCloneObject qui prend un objet en entrée et retourne un clone profond de cet objet. Le clonage profond signifie que tous les objets imbriqués doivent également être clonés, et non simplement copiés par référence. */
/* Créez une fonction deepCloneObject qui prend un objet en entrée et retourne un clone profond de cet objet. Le clonage profond signifie que tous les objets imbriqués doivent également être clonés, et non simplement copiés par référence. */

function deepCloneObject(obj) {
	if (typeof obj !== 'object' || obj === null) {
		return obj; // Si ce n'est pas un objet ou si c'est null, retourne la valeur primitive
	}

	let clone = Array.isArray(obj) ? [] : {}; // Crée un clone vide (tableau ou objet)

	for (let key in obj) {
		clone[key] = deepCloneObject(obj[key]); // Appel récursif pour les objets imbriqués
	}

	return clone;
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

const clonedCompany = deepCloneObject(company);
clonedCompany.employees.departments.marketing = 40; // Modifie le clone

console.log(company.employees.departments.marketing); // 30 (l'objet d'origine n'est pas modifié)
console.log(clonedCompany.employees.departments.marketing); // 40 (le clone est modifié)
