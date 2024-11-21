let livre = {
	titre: 'Le Petit Prince',
	auteur: 'Antoine de Saint-Exupéry',
	pages: 96,
	description: function () {
		console.log(
			"Le livre '" +
				this.titre +
				"' a été écrit par " +
				this.auteur +
				' et compte ' +
				this.pages +
				' pages.'
		);
	},
};

livre.description(); // Affiche "Le livre 'Le Petit Prince' a été écrit par Antoine de Saint-Exupéry et compte 96 pages."

livre.description =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nihil deserunt velit .';

livre.auteur = 'Bergson';

console.log(livre);
