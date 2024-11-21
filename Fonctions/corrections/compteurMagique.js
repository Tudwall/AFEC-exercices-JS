function compterDe(n) {
	if (n > 0) {
		console.log(n) // Affiche n
		compterDe(n - 1) // Appel récursif avec n-1
	}
}

compterDe(5) // Affiche 5, 4, 3, 2, 1
