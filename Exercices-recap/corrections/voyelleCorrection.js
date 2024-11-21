// Fonction qui compte le nombre de voyelles dans une phrase donnée
function compterVoyelles(phrase) {
	const voyelles = ['a', 'e', 'i', 'o', 'u', 'y']
	let count = 0

	// Convertir la phrase en minuscule pour éviter la casse
	phrase = phrase.toLowerCase()

	for (let i = 0; i < phrase.length; i++) {
		if (voyelles.includes(phrase[i])) {
			count++
		}
	}

	return count
}

// Vérification avec une phrase
const phrase = 'Bonjour tout le monde'
console.log(
	`Le nombre de voyelles dans "${phrase}" est :`,
	compterVoyelles(phrase)
)
