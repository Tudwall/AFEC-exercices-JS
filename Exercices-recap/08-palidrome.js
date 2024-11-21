/* L'objectif de cet exercice est de vérifier si un mot est un palindrome, c'est-à-dire un mot qui se lit de la même manière de gauche à droite que de droite à gauche (par exemple, "radar", "level").
 */

function estPalindrome(str) {
	let motReverse = str.split("").reverse().join("");
	return motReverse === str;
}

// Exemple de tests
console.log(estPalindrome("radar")); // true
console.log(estPalindrome("level")); // true
console.log(estPalindrome("bonjour")); // false
