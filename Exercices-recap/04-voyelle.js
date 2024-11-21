/* Créer une fonction qui compte le nombre de voyelles dans une phrase.

Resultat attendu :
Le nombre de voyelles dans "Bonjour tout le monde" est : 8
*/

function vowelCount(str) {
	const vowels = ["a", "e", "i", "o", "u", "y"];
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < vowels.length; j++) {
			if (str[i] == vowels[j]) {
				count++;
			}
		}
	}
	console.log(count);
}

vowelCount("Bonjour tout le monde");
