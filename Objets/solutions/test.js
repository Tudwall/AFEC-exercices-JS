let utilisateur = {
	nom: 'Jean',
	saluer: function () {
		let fonctionClassique = function () {
			console.log('Fonction classique : ' + this.nom);
		};

		let fonctionFlechee = () => {
			console.log('Fonction fléchée : ' + this.nom);
		};

		fonctionClassique(); // Affiche : "Fonction classique : undefined" (dans un navigateur, `this` est `window`)
		fonctionFlechee(); // Affiche : "Fonction fléchée : Jean"
	},
};

utilisateur.saluer();

function direBonjour() {
	console.log(this.nom);
}

let personne = {
	nom: 'Marie',
	saluer: direBonjour,
};

personne.saluer(); // Affiche : "Marie"
