/* Créez deux fonctions checkHotelAvailability et checkFlightAvailability. Utilisez Promise.all pour attendre la résolution des deux promesses avant d'afficher les résultats. */

function checkHotelAvailability(hotel) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			hotel === 'Hilton'
				? resolve('Hôtel réservé')
				: reject('Hôtel non disponible');
		}, 1000);
	});
}

function checkFlightAvailability(flight) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			flight === 'AF123'
				? resolve('Vol réservé')
				: reject('Vol non disponible');
		}, 1500);
	});
}

async function planTrip(hotel, flight) {
	try {
		const [hotelMessage, flightMessage] = await Promise.all([
			checkHotelAvailability(hotel),
			checkFlightAvailability(flight),
		]);
		console.log(hotelMessage); // Hôtel réservé
		console.log(flightMessage); // Vol réservé
	} catch (error) {
		console.log('error:', error); // Affiche l'erreur si l'une des promesses est rejetée
	}
}

/* planTrip('Hilton', 'AF123'); */

planTrip('Marriott', 'XY456');
