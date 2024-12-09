const nb = [4, 8, 15, 16, 23, 42];

let sum = nb.reduce((a, b) => a + b, 0);
console.log(sum);

let max = nb[0];
for (let i = 1; i < nb.length; i++) {
	if (nb[i] > max) max = nb[i];
}
console.log(max);

let avg = nb.reduce((a, b) => (a + b) / nb.length, 0);
console.log(avg);

function calculateStats(arr) {
	let sum = arr.reduce((a, b) => a + b, 0);
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
	}
	let avg = arr.reduce((a, b) => (a + b) / arr.length);

	let result = {
		sum: sum,
		max: max,
		avg: avg,
	};
	return result;
}

console.log(calculateStats(nb));
