/* Utilisez une boucle while pour parcourir les nombres de 0 à 20.
Affichez uniquement les nombres pairs  */
let count = 1;
while (count < 20) {
	if (count % 2 == 0) {
		let odd = count;
		console.log(`${odd} est pair`);
	}
	count++;
}
