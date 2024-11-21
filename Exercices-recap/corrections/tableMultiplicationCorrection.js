// Fonction qui génère la table de multiplication pour un nombre donné
function genererTableMultiplication(nombre) {
	for (let i = 1; i <= 10; i++) {
		console.log(`${nombre} x ${i} = ${nombre * i}`)
	}
}

// Vérification avec le nombre 7
console.log('Table de multiplication de 7 :')
genererTableMultiplication(7)
