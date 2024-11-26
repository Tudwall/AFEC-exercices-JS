/* 
Écris une fonction appelée getNumber qui :

    Retourne une Promesse.
    Cette Promesse résout un nombre aléatoire entre 1 et 10 après 2 secondes.
    */

//méthode1
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve(), ms));
}
async function getNumber() {
	await delay(2000);
	return (Math.random() * 10).toFixed(2);
}
async function displayNumber() {
	const number = await getNumber(); // Attends que getNumber() soit résolu
	console.log(number); // Affiche le nombre une fois que la promesse est résolue
}

displayNumber();

//méthode 2
/* function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function getNumber() {
	return delay(2000).then(() => (Math.random() * 10).toFixed(2));
}

getNumber().then((number) => {
	console.log(number); // Affiche le nombre une fois la promesse résolue
}); */
