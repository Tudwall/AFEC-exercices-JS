/* Modifie la fonction getNumber pour inclure un rejet :

    Si le nombre aléatoire généré est inférieur ou égal à 5, la Promesse doit être rejetée avec le message "Number too low".
    Utilise .catch() pour gérer cette erreur */

/* méthode1 */
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve(), ms));
}

async function getNumber() {
	await delay(2000);
	const number = (Math.random() * 10).toFixed(2);
	if (number >= 5) {
		return number;
	} else throw new Error("Number too low");
}

async function displayNumber() {
	try {
		const number = await getNumber(); // Attends que getNumber() soit résolu
		console.log(number);
	} catch (error) {
		console.log("error :", error.message);
	}
}

displayNumber();

//méthode 2
/* 
function getNumber() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const number = Math.floor(Math.random() * 10) + 1;
			if (number <= 5) {
				reject('Number too low');
			} else {
				resolve(number);
			}
		}, 2000);
	});
}

getNumber()
	.then((number) => {
		console.log('Le nombre généré est :', number);
	})
	.catch((error) => {
		console.log('Erreur :', error);
	});
 */
