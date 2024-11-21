function roundDownArray(tab) {
	return tab.map((num) => Math.floor(num)) // Utilise map pour appliquer Math.floor() à chaque élément
}

function sumOfArray(tab) {
	// Calcule la somme des éléments arrondis
	return roundDownArray(tab).reduce((acc, num) => acc + num, 0)
}

console.log(sumOfArray([3.7, 8.4, 2.1, 5.9]))
// Affichera : 18

switch (key) {
	case value:
		break

	default:
		break
}
