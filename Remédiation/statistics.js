const nb = [4, 8, 15, 16, 23, 42];

let sum = nb.reduce((a, b) => a + b, 0);
console.log(sum);

let sorted = nb.toSorted((a, b) => a - b);
console.log(sorted);
let max = sorted[sorted.length - 1];
console.log(max);

let avg = nb.reduce((a, b) => (a + b) / nb.length, 0);
console.log(avg);

function calculateStats(arr) {
	let sum = arr.reduce((a, b) => a + b, 0);
	let sorted = arr.sort((a, b) => a - b);
	let max = sorted[sorted.length - 1];
	let avg = arr.reduce((a, b) => (a + b) / arr.length);

	let result = {
		sum: sum,
		max: max,
		avg: avg,
	};
	return result;
}

console.log(calculateStats(nb));
