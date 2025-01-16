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
