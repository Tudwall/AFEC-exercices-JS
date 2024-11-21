// Fonction qui demande à l'utilisateur de deviner un nombre entre 1 et 100
function jeuDeDevinettes(nombreCorrect) {
	let essai = 0
	let guess = 0

	// Tant que le nombre deviné n'est pas correct
	while (guess !== nombreCorrect) {
		guess = Math.floor(Math.random() * 100) + 1 // Supposons que l'on génère un nombre au hasard
		essai++
		console.log(`Essai ${essai}: Vous avez deviné ${guess}`)
	}

	console.log(
		`Bravo, vous avez trouvé le nombre ${nombreCorrect} en ${essai} essais !`
	)
}

// Vérification avec le nombre à deviner 25
jeuDeDevinettes(25)
