function sortWordsInString(chaine) {
	if (chaine.trim() === '') return '' // Gérer le cas d'une chaîne vide

	// Diviser la chaîne en un tableau de mots, trier le tableau et le rejoindre
	return chaine.split(' ').sort().join(' ')
}

console.log(sortWordsInString("je suis en train d'apprendre le JavaScript"))
// "JavaScript apprendre d'apprendre en je le suis train"

console.log(sortWordsInString('chat chien oiseau poisson'))
// "chat chien oiseau poisson"

function sortWordsInString(chaine, ascending = true) {
	if (chaine.trim() === '') return ''

	let mots = chaine.split(' ')
	mots.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

	if (!ascending) {
		mots.reverse() // Inverser l'ordre pour le tri décroissant
	}

	return mots.join(' ')
}

console.log(sortWordsInString('Banane abricot Kiwi pomme', true)) // "abricot Banane Kiwi pomme"
console.log(sortWordsInString('Banane abricot Kiwi pomme', false)) // "pomme Kiwi Banane abricot"
