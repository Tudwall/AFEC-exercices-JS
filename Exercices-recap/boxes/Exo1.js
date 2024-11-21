// Déclare une fonction nommé afficherMessage avec un argument : message (chaine de caractère).

//La fonction doit ajouter des astérisques * autour du message pour créer un cadre.

/*   Exemple a Obtenir : 
      
         ***********
        *mon message*
         ***********                        */

function afficherMessage(str) {
	let length = str.length + 2;
	let line = "*".repeat(length);
	let message = "*" + str + "*";

	console.log(line);
	console.log(message);
	console.log(line);
}

afficherMessage("Ceci est un test");
