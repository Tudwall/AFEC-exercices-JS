let participants = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

participants.splice(3, 0, "Frank");

console.log(participants);

let indexEve = participants.indexOf("Eve");

if (indexEve !== -1) {
	participants.splice(indexEve, 1);
}

console.log(participants);

let indexBob = participants.indexOf("Bob");

if (indexBob !== -1) {
	participants[indexBob] = "Beatrice";
}

console.log(participants);

// ["Alice", "Beatrice", "Charlie", "Frank", "Diana"]

let firstThree = participants.slice(0, 3);

console.log(firstThree);

function updateList(action, index, value) {
	if (action === "add") {
		participants.splice(index, 0, value);
	} else if (action === "remove") {
		participants.splice(index, 1);
	} else if (action === "replace") {
		participants[index] = value;
	}
}

updateList("add", 2, "Frank"); // Ajoute "Frank" à l'index 2

updateList("remove", 4); // Supprime l'élément à l'index 4

updateList("replace", 1, "Beatrice"); // Remplace l'élément à l'index 1 par "Beatrice"

console.log(participants);

function updateListWithArray(action, index, values) {
	if (action === "add") {
		participants.splice(index, 0, ...values); // Le "..." permet d'ajouter plusieurs valeurs
	} else if (action === "remove") {
		participants.splice(index, values.length); // Supprime plusieurs éléments
	} else if (action === "replace") {
		for (let i = 0; i < values.length; i++) {
			participants[index + i] = values[i];
		}
	}
}

updateListWithArray("add", 2, ["Frank", "Grace", "Helen"]); // Ajoute plusieurs participants

console.log(participants);

// ["Alice", "Beatrice", "Frank", "Grace", "Helen", "Charlie", "Diana"]
