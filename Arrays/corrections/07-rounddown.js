function roundDownArray(tab) {
	return tab.map((num) => Math.floor(num)) // Utilise map pour appliquer Math.floor() à chaque élément
}

console.log(roundDownArray([3.7, 8.4, 2.1, 5.9]))
// Affichera : [3, 8, 2, 5]
