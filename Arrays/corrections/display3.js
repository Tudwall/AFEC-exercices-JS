function displayArray3(tab, useAnd) {
	if (tab.length === 0) return ''
	if (tab.length === 1) return tab[0]

	if (useAnd) {
		return tab.slice(0, -1).join(' ') + ' et ' + tab[tab.length - 1]
	} else {
		return tab.join(' ')
	}
}

console.log(displayArray3(['Pomme', 'Banane', 'Abricot', 'Cerise'], false)) // "Pomme Banane Abricot Cerise"
console.log(displayArray3(['Pomme', 'Banane', 'Abricot', 'Cerise'], true)) // "Pomme Banane Abricot et Cerise"
