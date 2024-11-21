function averageOfArray(tab) {
	const sum = sumOfArray(tab)
	return sum / tab.length
}

console.log(averageOfArray([3.7, 8.4, 2.1, 5.9]))
// Affichera : 4.5
