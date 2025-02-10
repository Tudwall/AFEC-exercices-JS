USE Bibliotheque;

INSERT INTO Lecteurs(noLecteur, nom, prenom, adresse, codePostal, ville)
VALUES 
(101, "Dupont", "12 rue des Lilas", "6 rue de la lecture", "75001", "Paris"), 
(102, "Martin", "Benoît", "45 avenue des Champs", "69003", "Lyon"),
(103, "Bernard", "Camille", "78 boulevard Haussmann", "75008", "Paris"),
(104, "Leroy", "Daniel", "3 place de la Republique", "31000", "Toulouse"),
(105, "Girard", "Emilie", "18 rue des fleurs","44000", "Nantes");

INSERT INTO Auteurs(idAuteur, nomAuteur, nationalite)
VALUES ("A001", "Antoine de Saint-Exupéry", "Français"), 
("A002", "George Orwell", "Britannique"),
("A003", "Albert Camus", "Français"),
("A004", "J.K. Rowling", "Britannique"),
("A005", "Victor Hugo", "Britannique");

INSERT INTO Categories(idCategorie, libelle)
VALUES ("C001", "Fiction"), 
("C002", "Science-Fiction"),
("C003", "Classique"),
("C004", "Fantastique");

INSERT INTO Livres(refLivre, titre, idAuteur, anneePublication, idCategorie, stock)
VALUES ("L001", "Le Petit Prince", "A001", 1943, "C001", 5), 
("L002", "1984", "A002", 1949, "C002", 3), 
("L003", "L'Etranger", "A003", 1942, "C003", 4), 
("L004", "Harry Potter à l'école des sorciers", "A004", 1997, "C004", 6), 
("L005", "Les Misérables", "A005", 1862, "C003", 2);


INSERT INTO Reservations(noLecteur, refLivre, dateReservation, etat)
VALUES (102, "L005", "2025-01-27", "en attente"),
(104, "L003", "2025-01-25", "en attente"),
(101, "L005", "2025-01-23", "en attente"),
(105, "L005", "2025-01-20", "en attente");


INSERT INTO Emprunts(noLecteur, refLivre, dateEmprunt, dateRetour, etat)
VALUES (101, "L001", "2025-01-21","2025-02-24", "ok" ),
(102, "L003", "2025-01-18","2025-02-20", "ok" ),
(103, "L004", "2025-01-23","2025-03-26", "ok" ),
(104, "L002", "2025-01-16", null, "en cours" );