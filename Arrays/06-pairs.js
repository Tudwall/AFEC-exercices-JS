/* Essayez d'écrire un programme qui prend un tableau de nombres et retourne un nouveau tableau contenant uniquement les nombres pairs, puis multipliez chaque nombre restant par 2. Utilisez filter() et map(). */

let nombres = [1, 2, 3, 4, 5, 6, 7, 8];
// résultats attendus [4, 8, 12, 16]

function oddOnly(arr) {
	let oddArr = arr.filter((x) => x % 2 === 0);
	let doubledOddArr = oddArr.map((x) => x * 2);

	return doubledOddArr;
}

console.log(oddOnly(nombres));
