/*

Ajouter des conditions pour personnaliser le cadre en fonction de la longueur du message.

Instructions :
- Si le message est trop court (moins de 5 caractères), afficher un cadre simple. 

- Si le message est long (plus de 10 caractères), afficher un cadre plus élaboré avec des caractères différents (ex : des "O" ou des "#").

- Utilise une condition if dans la fonction afficherMessage pour décider quel type de cadre afficher.*/

function afficherMessage(str) {
	let length = str.length + 2;
	let char;

	if (str.length <= 5) {
		char = "*";
	} else if (str.length >= 10) {
		char = "#";
	}

	let line = char.repeat(length);
	let message = char + str + char;

	console.log(line);
	console.log(message);
	console.log(line);
}

afficherMessage("lorem ipsum dolor sit amet");
