/* Créez une fonction deepCloneObject qui prend un objet en entrée et retourne un clone profond de cet objet. Le clonage profond signifie que tous les objets imbriqués doivent également être clonés, et non simplement copiés par référence. */

function deepClone(Obj) {
	if (typeof Obj !== "object" || Obj === null) {
		return Obj;
	}

	let clone = Array.isArray(Obj) ? [] : {};
	for (let key in Obj) {
		clone[key] = deepClone(Obj[key]);
	}

	return clone;
}

const company = {
	name: "TechCorp",
	employees: {
		count: 150,
		departments: {
			engineering: 50,
			marketing: 30,
		},
	},
	location: "New York",
};

let cloned = deepClone(company);
cloned.employees.departments.marketing = 40;

console.log(company.employees.departments.marketing); // 30 (l'objet d'origine n'est pas modifié)
console.log(cloned.employees.departments.marketing); // 40 (le clone est modifié)
