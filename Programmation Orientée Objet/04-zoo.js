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
		return "L'animal se déplace";
	}
}

class Oiseau extends Animal {
	seDeplacer() {
		return "L'oiseau vole";
	}
}

class Poisson extends Animal {
	seDeplacer() {
		return "Le poisson nage";
	}
}

class Mammifere extends Animal {
	seDeplacer() {
		return "Le mammifère marche";
	}
}

class Zoo {
	constructor(arr) {
		this.arr = arr;
	}

	ajouterAnimal(animal) {
		this.arr.push(animal);
	}

	listerAnimaux() {
		this.arr.forEach((element) => {
			return element.seDeplacer();
		});
	}
}
