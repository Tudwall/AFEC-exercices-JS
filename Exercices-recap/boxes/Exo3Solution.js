function afficherMessage(message) {
	// Choisir le caractère du cadre en fonction de la longueur du message
	let caractere = message.length < 5 ? '*' : '#' // Si message court, utiliser "*" sinon "#"
	let longueur = message.length + 2 // Ajouter 2 pour prendre en compte les côtés du cadre

	// Générer le cadre
	let cadre = caractere.repeat(longueur) // Crée une ligne de caractères répétés

	// Afficher le message avec le cadre autour
	console.log(cadre) // Affiche le cadre du haut
	console.log(caractere + message + caractere) // Affiche le message avec le caractère autour
	console.log(cadre) // Affiche le cadre du bas
}

afficherMessage('Hi') // Affiche un cadre avec des "*"
afficherMessage('Hello World!') // Affiche un cadre avec des "#"
