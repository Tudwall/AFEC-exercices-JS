/* Crée une fonction checkFlightAvailability(flightNumber) qui :

    Simule une vérification de disponibilité avec un délai (delay(2000)).
    Retourne true si le numéro de vol est "AF123".
    Renvoie une erreur si le vol n'est pas disponible.

Implémente deux versions de la fonction bookFlight(flightNumber) :

    Une avec des Promises (.then/.catch).
    Une autre avec async/await et try/catch. */

const delay = (ms) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
};

const checkFlightAvailability = (flightNumber) => {
	return new Promise((resolve, reject) => {
		if (flightNumber === "AF123") {
			resolve("Réservation confirmée");
		} else {
			reject("Vol indisponible");
		}
	});
};

/* const bookFlight = (flightNumber) => {
	checkFlightAvailability(flightNumber)
		.then((value) => {
			console.log(`${flightNumber}: ${value}`);
		})
		.catch((error) => {
			console.error(`${flightNumber}: ${error}`);
		});
}; */

async function bookFlight(flightNumber) {
	try {
		const available = await checkFlightAvailability(flightNumber);
		if (available) {
			console.log(`${flightNumber}: Vol confirmé`);
		}
	} catch (error) {
		console.error(`${flightNumber}: ${error}`);
	}
}

bookFlight("AF123"); // Réservation confirmée
bookFlight("XY456"); // Vol non disponible
