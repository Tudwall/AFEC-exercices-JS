CREATE DATABASE IF NOT EXISTS Bibliotheque;

USE Bibliotheque;

CREATE TABLE Lecteurs (
noLecteur int PRIMARY KEY,
nom varchar(100),
prenom varchar(100),
adresse varchar(100),
codePostal varchar(100),
ville varchar(100));

CREATE TABLE Auteurs (
idAuteur varchar(100) PRIMARY KEY,
nomAuteur varchar(100),
nationalite varchar(100));

CREATE TABLE Categories (
idCategorie varchar(100) PRIMARY KEY,
libelle varchar(100));

CREATE TABLE Livres (
refLivre varchar(100) PRIMARY KEY,
titre varchar(100),
idAuteur varchar(100),
anneePublication int,
idCategorie varchar(100),
stock int CHECK (stock >= 0),
CONSTRAINT fk_auteur_livres FOREIGN KEY (idAuteur) REFERENCES Auteurs(idAuteur),
CONSTRAINT fk_categorie_livres FOREIGN KEY (idCategorie) REFERENCES Categories(idCategorie));

CREATE TABLE Reservations (
noLecteur int,
refLivre varchar(100),
dateReservation date,
etat varchar(10) CHECK (etat IN ("en cours", "en attente")),
PRIMARY KEY (noLecteur, refLivre),
CONSTRAINT fk_lecteur_reservations FOREIGN KEY (noLecteur) REFERENCES Lecteurs(noLecteur),
CONSTRAINT fk_livre_reservations FOREIGN KEY (refLivre) REFERENCES Livres(refLivre),
CONSTRAINT pk_uc_reservations UNIQUE (noLecteur));

CREATE TABLE Emprunts (
noLecteur int,
refLivre varchar(100),
dateEmprunt date,
dateRetour date,
etat varchar(50) CHECK (etat IN ("en cours", "ok")),
PRIMARY KEY (noLecteur, refLivre),
CONSTRAINT fk_lecteur_emprunts FOREIGN KEY (noLecteur) REFERENCES Lecteurs(noLecteur),
CONSTRAINT fk_livre_emprunts FOREIGN KEY (refLivre) REFERENCES Livres(refLivre),
CONSTRAINT pk_uc_emprunts UNIQUE (noLecteur));
