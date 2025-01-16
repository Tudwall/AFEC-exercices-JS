/* Exercice 1 (Facile) : Création d'une Classe "Livre"

Objectif : Créer une classe simple pour représenter un livre avec un titre et un auteur, puis instancier des objets à partir de cette classe.

Instructions :

    Crée une classe Livre avec un constructeur prenant un titre et un auteur comme paramètres.
    Ajoute une méthode afficherDetails qui renvoie une phrase comme : "Le livre [titre] est écrit par [auteur]".
    Crée deux objets de type Livre et affiche leurs détails. */

class Livre {
	constructor(titre, auteur) {
		this.titre = titre;
		this.auteur = auteur;
	}

	afficherDetails() {
		return `Le livre "${this.titre}" est écrit par ${this.auteur}.`;
	}
}

const livre1 = new Livre('Les Misérables', 'Victor Hugo');
const livre2 = new Livre('1984', 'George Orwell');

console.log(livre1.afficherDetails()); // "Le livre "Les Misérables" est écrit par Victor Hugo."
console.log(livre2.afficherDetails()); // "Le livre "1984" est écrit par George Orwell."
