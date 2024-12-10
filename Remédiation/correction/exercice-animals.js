/* Passer au contenu principal
CORRECTION : Arrays Functions - 01Animals
Conditions d’achèvement */

/* Crée un tableau contenant les noms de 5 animaux. Réalise les étapes suivantes :



    - Ajoute un nouvel animal à la fin du tableau.

    - Supprime le premier animal du tableau.

    - Affiche tous les animaux en majuscules en utilisant une boucle for.



Bonus 1 : Trie les noms des animaux par ordre alphabétique.

Bonus 2 : Trouve et affiche le premier animal dont le nom contient plus de 5 lettres en utilisant une fonction avec un callback (find). */

let animals = ["chien", "chat", "perroquet", "cheval", "lapin"];

animals.push("lièvre");

console.log(animals);

animals.shift();

console.log(animals);

/*  Version conseillée



for (const element of animals) {

    console.log(element.toUpperCase());

} */

// version simple

for (let i = 0; i < animals.length; i++) {
	console.log(animals[i].toUpperCase());
}

// version simple

animals.sort();

console.log(animals);

let words = ["éclair", "apple", "Éléphant", "banana"];

// version conseillée pour ne pas tenir compte de la casse par exemple :

words.sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));

let longAnimal = animals.find((animal) => animal.length > 5);

console.log(longAnimal);
