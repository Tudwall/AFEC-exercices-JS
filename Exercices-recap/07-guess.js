/* 
D'accord, voici une reformulation de l'énoncé en fonction de la solution que tu souhaites obtenir.
Exercice 2 : Jeu de devinettes avec une solution aléatoire

Objectif : Utiliser une boucle pour créer un jeu où l'utilisateur doit deviner un nombre généré aléatoirement.

Instructions :

    - Créez une fonction qui prend en paramètre un nombre correct à deviner.

    - À chaque tour de boucle, générez un nombre aléatoire entre 1 et 100.

    - Affichez le nombre généré à chaque essai avec un message qui indique quel essai cela représente.
    
    - La boucle doit continuer jusqu'à ce que le nombre généré corresponde au nombre à deviner.
    
    - Affichez un message final indiquant combien d'essais l'utilisateur a fait pour trouver le bon nombre.
*/

function guess(num) {
	let i = 0;
	let test = 0;
	while (test != num) {
		test = Math.floor(Math.random() * num + 1);
		console.log(`essai ${i}:${test}`);
		i++;
	}
	console.log(`Il aura fallu ${i - 1} essais pour trouver ${num}`);
}

guess(50);
