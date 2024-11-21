/*    Créez une fonction nommée displayArray(tab) qui prend un tableau de chaînes de caractères en paramètre.
    La fonction doit retourner une chaîne de caractères où chaque élément du tableau est séparé par un espace.
     */

function displayArray(arr) {
	let str = arr.join(" ");
	return str;
}
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"]));
// Affichera : "Pomme Banane Abricot Cerise"
