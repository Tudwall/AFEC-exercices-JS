document.addEventListener('DOMContentLoaded', () => {
	const notification = document.getElementById('notification');
	const closeButton = document.getElementById('closeButton');
	const notificationCount = document.getElementById('count');

	let count = localStorage.getItem('notificationCount');

	// Mettre à jour l'affichage du nombre de notifications
	notificationCount.textContent = count;

	// Fonction pour récupérer la valeur d'un cookie par son nom
	function getCookie(name) {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(';').shift();
		return null;
	}

	// Fonction pour définir un cookie avec un nom et une valeur
	function setCookie(name, value) {
		document.cookie = `${name}=${value}; path=/`;
	}

	// Vérifier si la notification a été affichée dans cette session
	const notificationShown = getCookie('notificationShown');

	if (!Boolean(notificationShown)) {
		// Si la notification n'a pas été affichée, on l'affiche
		notification.classList.remove('hidden');
		// Enregistrer le cookie pour indiquer que la notification a été montrée
		setCookie('notificationShown', 'true');

		// Récupérer le nombre de notifications affichées dans LocalStorage
		let count = localStorage.getItem('notificationCount');
		if (count === null) {
			count = 0; // Initialisation à 0 si c'est la première fois
		}
		count = parseInt(count) + 1;
		localStorage.setItem('notificationCount', count);

		// Mettre à jour l'affichage du nombre de notifications
		notificationCount.textContent = count;
	}

	// Fermer la notification lorsque le bouton est cliqué
	closeButton.addEventListener('click', () => {
		notification.classList.add('hidden');
		if (count === null) {
			count = 0; // Initialisation à 0 si c'est la première fois
		}
		count = parseInt(count) + 1;
		localStorage.setItem('notificationCount', count);
		console.log('test', count);
		notificationCount.textContent = count;
	});
});
