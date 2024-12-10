/* 3. Exercice Avancé : Héritage et Polymorphisme avec "Animal" et "Chien"

Objectif : Créer une hiérarchie de classes pour gérer des animaux et utiliser l'héritage et le polymorphisme.

Instructions :

    Crée une classe Animal avec un constructeur prenant un nom et une espece. Ajoute une méthode faireDuBruit qui renvoie "L'animal fait un bruit".
    Crée une classe Chien qui hérite de Animal et redéfinit la méthode faireDuBruit pour que le chien aboie ("Le chien aboie : Woof!").
    Crée une classe Chat qui hérite également de Animal et redéfinit faireDuBruit pour que le chat miaule ("Le chat miaule : Meow!").
    Crée une méthode decrireAnimal qui prend un objet Animal en paramètre et affiche son bruit.
    Instancie un Chien et un Chat et utilisez decrireAnimal pour les deux. */

class Animal {
	constructor(name, specie) {
		this.name = name;
		this.specie = specie;
	}

	faireDuBruit() {
		return "L'animal fait du bruit";
	}

	decrireAnimal(animal) {
		return `${animal.faireDuBruit()}`;
	}
}

class Chien extends Animal {
	faireDuBruit() {
		return "Le chien aboie: Woof!";
	}
}

class Chat extends Animal {
	faireDuBruit() {
		return "Le chat miaule: Miaou!";
	}
}

const chat = new Chat("Felix", "Chat");
console.log(chat.faireDuBruit());
console.log(chat.decrireAnimal(chat));

const chien = new Chien("Rex", "Chien");
console.log(chien.decrireAnimal(chien));
