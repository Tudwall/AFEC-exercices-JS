const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

for (const month of months) {
	console.log(month);
}

function fillResult(arr) {
	let resultMonth = [];
	for (const el of arr) {
		resultMonth.push(el);
	}
	return resultMonth;
}

console.log(fillResult(months));
