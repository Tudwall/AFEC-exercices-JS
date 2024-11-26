/* Modifie la fonction getNumber pour inclure un rejet :

    Si le nombre aléatoire généré est inférieur ou égal à 5, la Promesse doit être rejetée avec le message "Number too low".
    Utilise .catch() pour gérer cette erreur */

const getNumber = () => {
	return new Promise((resolve, reject) => {
		console.log("Début timer");
		setTimeout(() => {
			const number = Math.floor(Math.random() * 10);
			if (number <= 5) {
				reject("Number too low");
			} else {
				resolve(number);
			}
		}, 2000);
	});
};

getNumber()
	.then((number) => {
		console.log(number);
	})
	.catch((error) => {
		console.error(error);
	});
