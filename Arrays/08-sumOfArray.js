/* En reprenant l'exercice précédent, créez une autre fonction qui calcule la somme de tous les éléments arrondis du tableau. */

function sumOfArray(tab) {
	let roundedDownArr = tab.map((x) => Math.floor(x));
	let init = 1;
	let sum = roundedDownArr.reduce((acc, current) => {
		acc * current, init;
		console.log(" avant: " + acc + " actuelle: " + current);
	});
	return sum;
}

console.log(sumOfArray([3.7, 8.4, 2.1, 5.9]));
// Affichera : 18 (3 + 8 + 2 + 5)
