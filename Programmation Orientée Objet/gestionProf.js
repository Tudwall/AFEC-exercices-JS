class Professeur {
	#numTel;
	#salaireBase;
	constructor(nom, prenom, matiere, numTel, salaireBase) {
		this.nom = nom;
		this.prenom = prenom;
		this.matiere = matiere;
		this.#numTel = numTel;
		this.#salaireBase = salaireBase;
	}

	get numtel() {
		return this.#numTel;
	}

	set numTel(nouveauNumTel) {
		this.#numTel = nouveauNumTel;
	}

	get salaireBase() {
		return this.#salaireBase;
	}

	set salaireBase(nouveauSalaireBase) {
		if (nouveauSalaireBase <= 0) {
			console.error("Le salaire ne peut pas être inférieur ou égal à zéro");
		} else {
			this.#salaireBase = nouveauSalaireBase;
		}
	}

	afficher() {
		console.log(`${this.nom} ${this.prenom}`);
		console.log(`Matière: ${this.matiere}`);
		console.log(`Téléphone: ${this.#numTel}`);
		console.log(`Salaire: ${this.#salaireBase}€`);
	}
}

let patrick = new Professeur(
	"Dupont",
	"Patrick",
	"Maths",
	"06 23 62 77 98",
	2000
);

patrick.afficher();

class Etudiant {
	constructor(
		nom,
		prenom,
		numTel,
		dateNais,
		niveau,
		comm = "[aucun commentaire]"
	) {
		this.nom = nom;
		this.prenom = prenom;
		this.numTel = numTel;
		this.dateNais = dateNais;
		this.niveau = niveau;
		this.comm = comm;
	}

	afficher() {
		console.log(`${this.nom} ${this.prenom}`);
		console.log(`Téléphone: ${this.numTel}`);
		console.log(`Date de naissance: ${this.dateNais}`);
		console.log(`Niveau: ${this.niveau}`);
		console.log(`Commentaire: ${this.comm}`);
	}
}

let alice = new Etudiant(
	"Laplace",
	"Alice",
	"07 24 25 24 26",
	"15 mai 98",
	"licence",
	"Allergie arachides"
);

alice.afficher();

class Adresse {
	constructor(
		numVoie,
		typeVoie,
		nomVoie,
		codePostal,
		ville,
		mentionsComp = null
	) {
		this.numVoie = numVoie;
		this.typeVoie = typeVoie;
		this.nomVoie = nomVoie;
		this.codePostal = codePostal;
		this.ville = ville;
		this.mentionsComp = mentionsComp;
	}

	afficher() {
		if (this.mentionsComp) {
			console.log(`${this.mentionsComp}`);
		}
		console.log(`${this.numVoie} ${this.typeVoie} ${this.nomVoie}`);
		console.log(`${this.codePostal} ${this.ville}`);
	}
}

let adresse1 = new Adresse(
	"12",
	"rue",
	"des Champs",
	75000,
	"Paris",
	"Appartement B24"
);

let adresse2 = new Adresse("5", "rue", "Victor Hugo", 44000, "Nantes");

adresse1.afficher();
adresse2.afficher();
