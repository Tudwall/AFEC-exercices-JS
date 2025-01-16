/* 3. Exercice Avancé : Héritage et Polymorphisme avec "Animal" et "Chien"

Objectif : Créer une hiérarchie de classes pour gérer des animaux et utiliser l'héritage et le polymorphisme.

Instructions :

    Crée une classe Animal avec un constructeur prenant un nom et une espece. Ajoute une méthode faireDuBruit qui renvoie "L'animal fait un bruit".
    Crée une classe Chien qui hérite de Animal et redéfinit la méthode faireDuBruit pour que le chien aboie ("Le chien aboie : Woof!").
    Crée une classe Chat qui hérite également de Animal et redéfinit faireDuBruit pour que le chat miaule ("Le chat miaule : Meow!").
    Crée une méthode decrireAnimal qui prend un objet Animal en paramètre et affiche son bruit.
    Instancie un Chien et un Chat et utilisez decrireAnimal pour les deux. */

class Animal {
	constructor(nom, espece) {
		this.nom = nom;
		this.espece = espece;
	}

	faireDuBruit() {
		return "L'animal fait un bruit.";
	}
}

class Chien extends Animal {
	faireDuBruit() {
		return 'Le chien aboie : Woof!';
	}
}

class Chat extends Animal {
	faireDuBruit() {
		return 'Le chat miaule : Meow!';
	}
}

function decrireAnimal(animal) {
	console.log(
		`${animal.nom} est un(e) ${animal.espece}. ${animal.faireDuBruit()}`
	);
}

const rex = new Chien('Rex', 'chien');
const mimi = new Chat('Mimi', 'chat');

decrireAnimal(rex); // "Rex est un(e) chien. Le chien aboie : Woof!"
decrireAnimal(mimi); // "Mimi est un(e) chat. Le chat miaule : Meow!"
