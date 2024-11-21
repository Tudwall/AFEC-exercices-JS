// Crée une fonction qui génère un cadre (comme l'exercice précédent) avec une boucle for.

// Utilise cette fonction dans afficherMessage pour remplacer *. Par exemple, au lieu de *, utilise une boucle pour répéter un autre caractère.

function afficherMessage(str, char = "*") {
	let length = str.length + 2;
	let line = char.repeat(length);
	let message = char + str + char;

	console.log(line);
	console.log(message);
	console.log(line);
}
afficherMessage("ceci est un test", "#");
