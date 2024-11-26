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

async function availableFlight(vol) {
	await delay(2000);
	return vol == 'AF123';
}
async function bookFlight(vol) {
	try {
		return (await availableFlight(vol)) === true
			? console.log('Réservation confirmée')
			: console.log('Vol non disponible');
	} catch (error) {
		console.log('error', error);
	}
}
bookFlight('AF123'); // Réservation confirmée
bookFlight('XY456'); // Vol non disponible
