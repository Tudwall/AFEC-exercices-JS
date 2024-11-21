/* Créez une fonction nommée displayArray2(tab) qui prend un tableau de chaînes de caractères en paramètre.
La fonction doit retourner une chaîne de caractères où chaque élément est séparé par un espace, mais le dernier élément doit être précédé de " et ". */

function displayArray2(tab) {
	let last = `"${tab[tab.length - 1]}"`;
	tab.pop();
	tab.push(last);
	let str = tab.join(" ");

	return str;
}

console.log(displayArray2(["Pomme", "Banane", "Abricot", "Cerise"]));
// Affichera : "Pomme Banane Abricot et Cerise"
