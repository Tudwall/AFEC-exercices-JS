/* Afficher les nombres de 1 à 20 et  à remplacer tout nombre divisible par trois par le mot « fizz », et tout nombre divisible par cinq par le mot « buzz », et tout nombre divisible par trois et cinq par le mot « fizzbuzz » */
for (let i = 0; i < 20; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log(`${i} fizzbuzz`);
	} else if (i % 3 == 0) {
		console.log(`${i} fizz`);
	} else if (i % 5 == 0) {
		console.log(`${i} buzz`);
	}
}
