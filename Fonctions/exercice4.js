function boiteASurprise(...arguments) {
	let result = 0;
	for (arg of arguments)
		if (arg % 2 === 0) {
			result += arg;
		}
	return result;
}

console.log(boiteASurprise(1, 2, 3, 4, 5, 6, 7, 8, 9));
