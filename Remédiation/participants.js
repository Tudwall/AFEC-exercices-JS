const participants = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

let charlieIdx = participants.indexOf("Charlie");
participants.splice(charlieIdx + 1, 0, "Frank");
console.log(participants);

let eveIdx = participants.indexOf("Eve");
participants.splice(eveIdx, 1);
console.log(participants);

let bobIdx = participants.indexOf("Bob");
participants.splice(bobIdx, 1, "Beatrice");
console.log(participants);

const firstThree = participants.slice(2);
console.log(firstThree);

function manageArray(action, index, ...value) {
	switch (action) {
		case "add":
			participants.splice(index, 0, value);
			break;
		case "remove":
			participants.splice(participants.indexOf(index), 1);
			break;
		case "replace":
			participants.splice(index + 1, 0, value);
			break;
	}
}

manageArray("add", participants.length, "Bob", "John");
console.log(participants);

manageArray("remove", "Diana");
console.log(participants);
