function compterDe(n) {
	if (n > 0) {
		console.log(n);
		compterDe(n - 1);
	} else if (n == 0) {
		return;
	}
}

compterDe(5);
