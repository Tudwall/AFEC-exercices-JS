const animals = ["Chien", "Chat", "Oiseau", "Vache", "Poisson"];

animals.push("Girafe");
console.log("ajouter " + animals);

animals.unshift();
console.log("supprimer le premier " + animals);

for (const animal of animals) {
	console.log(animal.toUpperCase());
}

let sortedAnimals = animals.toSorted((a, b) => a.localeCompare(b));
console.log(sortedAnimals);

let firstFiveLetters = animals.find((element) => element.length > 5);
console.log(firstFiveLetters);
