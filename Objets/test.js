let voiture = {
	marque: "Toyota",
	annee: 2020,
};

let clone2 = { ...voiture };
let clone = voiture;
clone.annee = 2021;
console.log(voiture.annee);

clone2.annee = 2022;
console.log(voiture.annee);
