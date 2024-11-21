/* Créer une fonction qui génère la table de multiplication d'un nombre jusqu'à 10 */
function multiplication(num) {
	for (let i = 0; i < 10; i++) {
		console.log(`${num} x ${i} = ${num * i}`);
	}
}

multiplication(7);
