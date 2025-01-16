/* 2. Exercice Intermédiaire : Création d'une Classe "Voiture" avec Encapsulation

Objectif : Créer une classe Voiture avec des propriétés privées et des méthodes pour accéder et modifier ces propriétés.

Instructions :

    Crée une classe Voiture avec les propriétés privées suivantes : marque, modele, et kilometrage.
    Ajoute un constructeur pour initialiser ces propriétés.
    Utilise des getters et setters pour obtenir et mettre à jour les valeurs de kilometrage (le kilométrage de la voiture ne doit pas pouvoir être négatif).
    Ajoute une méthode afficherDetails qui affiche les informations de la voiture.

 */

class Voiture {
	#kilometrage;

	constructor(marque, modele, kilometrage) {
		this.marque = marque;
		this.modele = modele;
		this.#kilometrage = kilometrage;
	}

	// Getter
	get kilometrage() {
		return this.#kilometrage;
	}

	// Setter
	set kilometrage(nouveauKilometrage) {
		if (nouveauKilometrage >= 0) {
			this.#kilometrage = nouveauKilometrage;
		} else {
			console.error('Le kilométrage ne peut pas être négatif.');
		}
	}

	afficherDetails() {
		return `Marque : ${this.marque}, Modèle : ${this.modele}, Kilométrage : ${
			this.#kilometrage
		} km.`;
	}
}

const maVoiture = new Voiture('Toyota', 'Corolla', 15000);
console.log(maVoiture.afficherDetails()); // "Marque : Toyota, Modèle : Corolla, Kilométrage : 15000 km."
maVoiture.kilometrage = 16000;
console.log(maVoiture.afficherDetails()); // "Marque : Toyota, Modèle : Corolla, Kilométrage : 16000 km."
maVoiture.kilometrage = -1000; // "Le kilométrage ne peut pas être négatif."
