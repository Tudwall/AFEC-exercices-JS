/* Créez deux fonctions checkHotelAvailability et checkFlightAvailability. Utilisez Promise.all pour attendre la résolution des deux promesses avant d'afficher les résultats. */

const checkHotelAvailability = (hotel) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (hotel === "Hilton") {
				resolve("Réservation d'hotel possible");
			} else {
				reject("Impossible de réserver");
			}
		});
	});
};

const checkFlightAvailability = (flightNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (flightNumber === "AF123") {
				resolve("Réservation de billet possible");
			} else {
				reject("Impossible de réserver");
			}
		}, 1500);
	});
};

const planTrip = async (hotel, flight) => {
	Promise.all([checkHotelAvailability(hotel), checkFlightAvailability(flight)])
		.then((value) => {
			value.forEach((element) => {
				console.log(element);
			});
		})
		.catch((error) => {
			console.error("error:", error);
		});
};

planTrip("Hilton", "AF123");

planTrip("Marriott", "XY456");
