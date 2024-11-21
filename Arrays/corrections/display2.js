function displayArray2(tab) {
	if (tab.length === 0) return ''
	if (tab.length === 1) return tab[0]

	// Utiliser slice et join pour construire la chaîne
	return tab.slice(0, -1).join(' ') + ' et ' + tab[tab.length - 1]
}

console.log(displayArray2(['Pomme', 'Banane', 'Abricot', 'Cerise'])) // "Pomme Banane Abricot et Cerise"
