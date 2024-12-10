/* 2. Exercice Intermédiaire : Création d'une Classe "Voiture" avec Encapsulation

Objectif : Créer une classe Voiture avec des propriétés privées et des méthodes pour accéder et modifier ces propriétés.

Instructions :

    Crée une classe Voiture avec les propriétés privées suivantes : marque, modele, et kilometrage.
    Ajoute un constructeur pour initialiser ces propriétés.
    Utilise des getters et setters pour obtenir et mettre à jour les valeurs de kilometrage (le kilométrage de la voiture ne doit pas pouvoir être négatif).
    Ajoute une méthode afficherDetails qui affiche les informations de la voiture.

 */

class Voiture {
	#km;
	constructor(marque, modele, km) {
		this.marque = marque;
		this.modele = modele;
		this.#km = km;
	}

	get km() {
		return this.#km;
	}

	set km(nouveauKm) {
		if (nouveauKm < 0) {
			console.error("Le kilométrage ne peut pas être négatif");
		} else {
			this.#km = nouveauKm;
		}
	}

	afficherDetails() {
		console.log(
			`La voiture est une ${this.marque} ${this.modele} avec ${
				this.#km
			} kilomètres`
		);
	}
}

const toyota = new Voiture("Toyota", "Camaro", "36 000");
toyota.afficherDetails();

const hyundai = new Voiture("Hyundai", "Ioniq 5", "154 000");
hyundai.afficherDetails();
hyundai.km = "20 000";
console.log(hyundai.km);
hyundai.km = "-20";
console.log(hyundai.km);
