/* Créez une fonction nommée roundDownArray(tab) qui prend en paramètre un tableau de nombres décimaux. */

function roundDownArray(tab) {
	let roundedDownArr = tab.map(Math.floor);
	return roundedDownArr;
}

console.log(roundDownArray([3.7, 8.4, 2.1, 5.9]));
// Affichera : [3, 8, 2, 5]
