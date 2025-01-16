/* 4. Exercice Difficile : Gestion d'un Zoo avec Héritage, Polymorphisme, et Encapsulation

Objectif : Créer une classe Zoo qui gère plusieurs animaux, en utilisant l'héritage, le polymorphisme, et l'encapsulation pour améliorer la gestion des animaux.

Instructions :

    Crée une classe Animal avec les propriétés nom, espece, et age, ainsi qu'une méthode seDeplacer qui décrit le déplacement de l'animal.
    Crée des classes héritées de Animal : Oiseau (voler), Poisson (nager), Mammifere (marcher).
    Crée une classe Zoo avec un tableau d'animaux. Ajoute des méthodes pour ajouter un animal, afficher la liste des animaux et leur déplacement.
    Ajoute une méthode pour afficher un message si un animal est trop vieux pour être déplacé.
    Utilise des getters et setters pour la gestion de l'âge des animaux. */

class Animal {
	constructor(nom, espece, age) {
		this.nom = nom;
		this.espece = espece;
		this.age = age;
	}

	seDeplacer() {
		return "L'animal se déplace.";
	}

	get age() {
		return this._age;
	}

	set age(nouvelAge) {
		if (nouvelAge >= 0) {
			this._age = nouvelAge;
		} else {
			console.error("L'âge ne peut pas être négatif.");
		}
	}
}

class Oiseau extends Animal {
	seDeplacer() {
		return `${this.nom} vole.`;
	}
}

class Poisson extends Animal {
	seDeplacer() {
		return `${this.nom} nage.`;
	}
}

class Mammifere extends Animal {
	seDeplacer() {
		return `${this.nom} marche.`;
	}
}

class Zoo {
	constructor(nom) {
		this.nom = nom;
		this.animaux = [];
	}

	ajouterAnimal(animal) {
		this.animaux.push(animal);
	}

	afficherAnimaux() {
		this.animaux.forEach((animal) => {
			console.log(
				`${animal.nom} est un(e) ${animal.espece}. ${animal.seDeplacer()}`
			);
		});
	}

	afficherAnimauxVieux() {
		this.animaux.forEach((animal) => {
			if (animal.age > 10) {
				console.log(`${animal.nom} est trop vieux pour se déplacer.`);
			}
		});
	}
}

const zoo = new Zoo('Le Grand Zoo');
const oiseau1 = new Oiseau('Aigle', 'oiseau', 5);
const poisson1 = new Poisson('Nemo', 'poisson', 2);
const mammifere1 = new Mammifere('Lion', 'mammifère', 12);

zoo.ajouterAnimal(oiseau1);
zoo.ajouterAnimal(poisson1);
zoo.ajouterAnimal(mammifere1);

zoo.afficherAnimaux(); // Affiche les déplacements
zoo.afficherAnimauxVieux(); // Affiche le message pour les animaux trop vieux
