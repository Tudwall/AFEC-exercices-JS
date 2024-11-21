/* Créez un objet livre qui contient les propriétés suivantes : titre, auteur, pages et une méthode description qui affiche une phrase comme : "Le livre 'titre' a été écrit par "auteur" et compte "pages" pages." */
let book = {
	titre: "Le Seigneur des Anneaux",
	auteur: "J.R.R. Tolkien",
	pages: 1156,
};
console.log(book);
/*  Ajoutez une propriété description . */
book.desc = function () {
	return (
		"Le livre " +
		this.titre +
		" a été écrit par " +
		this.auteur +
		" et compte " +
		this.pages +
		" pages."
	);
};
console.log(book.desc());
/* Modifiez la valeur de l'auteur et affichez l'objet mis à jour . */
book.auteur = "Tolkien";
console.log(book);
