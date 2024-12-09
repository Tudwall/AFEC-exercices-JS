const prix = [20, 50, 15, 70, 30];

const moins10 = prix.map((x) => x * 0.9);

for (const prix of moins10) {
	console.log(prix + "€");
}

let lessThan25 = [];
for (const prix of moins10) {
	if (prix < 25) {
		lessThan25.push(prix);
	}
}
console.log(lessThan25);

function isOdd(nb) {
	if (nb % 2 == 0) {
		return nb;
	}
}

function includeNb(fn) {
	return fn;
}

console.log(includeNb(isOdd(13)));
