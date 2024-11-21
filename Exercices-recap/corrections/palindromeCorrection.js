// Fonction pour vérifier si un mot est un palindrome
function estPalindrome(mot) {
	// On transforme le mot en minuscule et on inverse la chaîne pour vérifier si elle est identique
	let motInverse = mot.split('').reverse().join('')
	return mot === motInverse
}

// Exemple de tests
console.log(estPalindrome('radar')) // true
console.log(estPalindrome('level')) // true
console.log(estPalindrome('bonjour')) // false
