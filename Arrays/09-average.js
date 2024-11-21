/* Enfin, créez une fonction qui calcule la moyenne des éléments arrondis du tableau (en arrondissant la somme avant de la diviser par la longueur du tableau). */

function averageOfArray(arr) {
	let roundedArr = arr.map((x) => Math.floor(x));
	let sumArr = roundedArr.reduce((acc, current) => acc + current, 0);
	let averagedArr = sumArr / roundedArr.length;
	return averagedArr;
}

console.log(averageOfArray([3.7, 8.4, 2.1, 5.9]));
// Affichera : 4.5 (18 / 4)
