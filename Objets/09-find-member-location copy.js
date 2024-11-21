/* Créez une fonction findMemberLocation qui prend un objet et une clé de propriété, et retourne l'emplacement de cette clé dans l'objet, y compris dans les objets imbriqués. Si la clé n'est pas trouvée, la fonction doit retourner null. */

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

function findMemberLocation(obj, keyToFind) {
	let result = null;

	function search(o, key) {
		for (let key in o) {
			if (key === keyToFind) {
				result = o;
				return;
			}
			if (typeof o[key] === "object" && o[key] !== null) {
				search(o[key], key);
			}
		}
	}
	search(obj, keyToFind);
	return result;
}

console.log(findMemberLocation(company, "marketing")); // { engineering: 50, marketing: 30 }
console.log(findMemberLocation(company, "count")); // { count: 150, departments: { engineering: 50, marketing: 30 } }
console.log(findMemberLocation(company, "address")); // null
