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
}

const livre1 = new Livre("Le Seigneur des Anneaux", "J.R.R. Tolkien");
console.log(livre1);
const livre2 = new Livre("La Ferme des Animaux", "George Orwell");
console.log(livre2);
