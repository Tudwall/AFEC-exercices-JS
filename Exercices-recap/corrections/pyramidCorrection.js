// Fonction qui génère une pyramide complète avec une hauteur donnée
function afficherPyramideComplete(hauteur) {
	for (let i = 1; i <= hauteur; i++) {
		let ligne = ''

		// Ajout des espaces pour centrer
		for (let j = 1; j <= hauteur - i; j++) {
			ligne += ' '
		}

		// Ajout des étoiles
		for (let k = 1; k <= 2 * i - 1; k++) {
			ligne += '*'
		}

		console.log(ligne)
	}
}

// Vérification avec une hauteur de 5
console.log('Pyramide complète de hauteur 5 :')
afficherPyramideComplete(5)
