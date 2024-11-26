/* 
Écris une fonction appelée getNumber qui :

    Retourne une Promesse.
    Cette Promesse résout un nombre aléatoire entre 1 et 10 après 2 secondes.
    */

const getNumber = () => {
	return new Promise((resolve) => {
		console.log("Début timer");
		setTimeout(() => {
			console.log(Math.floor(Math.random() * 10));
			resolve();
		}, 2000);
	});
};

getNumber();