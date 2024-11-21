function afficherMessage(message) {
	let longueur = message.length + 2 // Pour ajouter les astérisques autour du message
	let ligne = '*'.repeat(longueur) // Crée une ligne de '*' avec la bonne longueur
	console.log(ligne)
	console.log('*' + message + '*') // Affiche le message avec des astérisques de chaque côté
	console.log(ligne)
}

afficherMessage('Bonjour') // Affiche le message "Bonjour" entouré de lignes d'astérisques
