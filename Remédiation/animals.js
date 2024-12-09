const animals = ["Chien", "Chat", "Oiseau", "Vache", "Poisson"];

animals.push("Girafe");
console.log("ajouter " + animals);

animals.unshift();
console.log("supprimer le premier " + animals);

for (let i = 0; i < animals.length; i++) {
	console.log(animals[i].toUpperCase());
}

let sortedAnimals = animals.sort((a, b) => a.localeCompare(b));
console.log(sortedAnimals);

let firstFiveLetters = animals.find((element) => element.length > 5);
console.log(firstFiveLetters);
