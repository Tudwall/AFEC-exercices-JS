/* Crée une fonction checkFlightAvailability(flightNumber) qui :

    Simule une vérification de disponibilité avec un délai (delay(2000)).
    Retourne true si le numéro de vol est "AF123".
    Renvoie une erreur si le vol n'est pas disponible.

Implémente deux versions de la fonction bookFlight(flightNumber) :

    Une avec des Promises (.then/.catch).
    Une autre avec async/await et try/catch. */

function delay(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

function availableFlight(vol) {
	return new Promise((resolve, reject) => {
		delay(1000).then(() => {
			vol == 'AF123'
				? resolve('Réservation confirmée')
				: reject('Vol non disponible');
		});
	});
}
function bookFlight(vol) {
	return availableFlight(vol)
		.then((message) => console.log(message))
		.catch((error) => console.log(error));
}
bookFlight('AF123'); // Réservation confirmée
bookFlight('XY456'); // Vol non disponible
