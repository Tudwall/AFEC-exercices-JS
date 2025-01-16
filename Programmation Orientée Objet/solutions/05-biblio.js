/*     Classes de Base et Héritage :
        Crée une classe Média avec les propriétés titre, dateDePublication et type (par exemple "Livre", "Revue", "Film"). Ajoute un constructeur pour initialiser ces propriétés.
        Crée une méthode afficherDetails dans la classe Média qui affiche le titre et le type du média.

    Sous-classes :
        Crée une sous-classe Livre qui hérite de Média et ajoute une propriété auteur. Redéfinis la méthode afficherDetails pour inclure l'auteur du livre.
        Crée une sous-classe Revue qui hérite de Média et ajoute une propriété numero. Redéfinis la méthode afficherDetails pour inclure le numéro de la revue.
        Crée une sous-classe Film qui hérite de Média et ajoute une propriété realisateur. Redéfinis la méthode afficherDetails pour inclure le réalisateur du film.

    Gestion de la Bibliothèque :
        Crée une classe Bibliotheque qui gère une collection de médias. La classe doit permettre d'ajouter un média, de lister tous les médias et de chercher un média par titre.
        Ajoute une méthode chercherParTitre qui permet de rechercher un média par son titre et d'afficher ses détails.
        Ajoute une méthode afficherCollection pour afficher tous les médias de la bibliothèque.

    Bonus Encapsulation :
        Encapsule les propriétés des objets afin qu'elles ne soient pas accessibles directement depuis l'extérieur de la classe (par exemple, en utilisant des propriétés privées ou des getters et setters). */

// Classe de base
class Media {
	constructor(titre, dateDePublication, type) {
		this._titre = titre;
		this._dateDePublication = dateDePublication;
		this._type = type;
	}

	// Getter
	get titre() {
		return this._titre;
	}

	// Setter
	set titre(titre) {
		this._titre = titre;
	}

	afficherDetails() {
		return `Titre: ${this._titre}, Type: ${this._type}, Date de publication: ${this._dateDePublication}`;
	}
}

// Sous-classe Livre
class Livre extends Media {
	constructor(titre, dateDePublication, auteur) {
		super(titre, dateDePublication, 'Livre');
		this._auteur = auteur;
	}

	// Getter et Setter pour auteur
	get auteur() {
		return this._auteur;
	}

	set auteur(auteur) {
		this._auteur = auteur;
	}

	afficherDetails() {
		return `${super.afficherDetails()}, Auteur: ${this._auteur}`;
	}
}

// Sous-classe Revue
class Revue extends Media {
	constructor(titre, dateDePublication, numero) {
		super(titre, dateDePublication, 'Revue');
		this._numero = numero;
	}

	// Getter et Setter pour numero
	get numero() {
		return this._numero;
	}

	set numero(numero) {
		this._numero = numero;
	}

	afficherDetails() {
		return `${super.afficherDetails()}, Numéro: ${this._numero}`;
	}
}

// Sous-classe Film
class Film extends Media {
	constructor(titre, dateDePublication, realisateur) {
		super(titre, dateDePublication, 'Film');
		this._realisateur = realisateur;
	}

	// Getter et Setter pour realisateur
	get realisateur() {
		return this._realisateur;
	}

	set realisateur(realisateur) {
		this._realisateur = realisateur;
	}

	afficherDetails() {
		return `${super.afficherDetails()}, Réalisateur: ${this._realisateur}`;
	}
}

// Classe Bibliotheque
class Bibliotheque {
	constructor() {
		this._medias = [];
	}

	// Ajouter un média
	ajouterMedia(media) {
		this._medias.push(media);
	}

	// Chercher un média par titre
	chercherParTitre(titre) {
		const mediaTrouve = this._medias.find((media) => media.titre === titre);
		if (mediaTrouve) {
			console.log(mediaTrouve.afficherDetails());
		} else {
			console.log('Média non trouvé.');
		}
	}

	// Afficher tous les médias
	afficherCollection() {
		this._medias.forEach((media) => {
			console.log(media.afficherDetails());
		});
	}
}

// Création de la bibliothèque et ajout de médias
const bibliotheque = new Bibliotheque();

const livre1 = new Livre('Les Misérables', '1862', 'Victor Hugo');
const revue1 = new Revue('Nature', '2023', '45');
const film1 = new Film('Inception', '2010', 'Christopher Nolan');

bibliotheque.ajouterMedia(livre1);
bibliotheque.ajouterMedia(revue1);
bibliotheque.ajouterMedia(film1);

// Affichage de tous les médias
bibliotheque.afficherCollection();
// Recherche par titre
bibliotheque.chercherParTitre('Inception');
bibliotheque.chercherParTitre('Le Petit Prince'); // "Média non trouvé."
