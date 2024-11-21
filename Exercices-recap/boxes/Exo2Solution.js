function genererCadre(longueur) {
	let cadre = ''
	for (let i = 0; i < longueur; i++) {
		cadre += '*'
	}
	return cadre
}

function afficherMessage(message) {
	let longueur = message.length + 2
	let ligne = genererCadre(longueur) // Utilise la fonction pour générer la ligne de cadre
	console.log(ligne)
	console.log('*' + message + '*')
	console.log(ligne)
}

afficherMessage('Bonjour') // Toujours le même résultat, mais avec une fonction séparée
