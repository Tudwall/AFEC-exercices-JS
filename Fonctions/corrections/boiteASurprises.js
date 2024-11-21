function boiteASurprise(...args) {
	let somme = 0
	for (let num of args) {
		if (num % 2 === 0) {
			// Vérifie si le nombre est pair
			somme += num // Ajoute à la somme
		}
	}
	return somme
}

console.log(boiteASurprise(1, 2, 3, 4, 5, 6)) // Affiche 12 (2 + 4 + 6)
