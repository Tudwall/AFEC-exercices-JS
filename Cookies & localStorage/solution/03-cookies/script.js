/* 

    Créez une page avec un formulaire permettant de sélectionner :
        Une langue (ex. : français, anglais).
        Un thème (ex. : clair, sombre).
    Lorsque l'utilisateur soumet le formulaire, sauvegardez ses choix dans des cookies avec une durée d'expiration de 7 jours.
    Lors du rechargement de la page, appliquez automatiquement les préférences en fonction des cookies. */

document.addEventListener('DOMContentLoaded', () => {
	const formPreferences = document.getElementById('form');
	const languageSelect = document.getElementById('language');

	const themeSelect = document.getElementById('theme');

	function setCookie(name, value, days) {
		console.log('set', name, value, days);
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
	}

	function getCookie(name) {
		const cookies = document.cookie.split('; ');
		for (const cookie of cookies) {
			const [key, value] = cookie.split('=');
			if (key === name) {
				return value;
			}
		}
		return null;
	}

	const langue = getCookie('langue') || 'fr';
	const theme = getCookie('theme') || 'light';
	languageSelect.value = langue;
	themeSelect.value = theme;
	applyPreferences(theme);

	formPreferences.addEventListener('submit', (e) => {
		e.preventDefault();
		console.log('submit');
		try {
			console.log('submot', languageSelect.value);
			setCookie('langue', languageSelect.value, 7);
			setCookie('theme', themeSelect.value, 7);
			applyPreferences(themeSelect.value);
			showAlert('Vos préférences ont été enregistrées avec succès.', 'success');
		} catch (error) {
			showAlert(
				"Une erreur est survenue lors de l'enregistrement des préférences.",
				'error'
			);
		}
	});

	function showAlert(message, type) {
		const alertBox = document.getElementById('alert');
		alertBox.textContent = message;
		alertBox.classList.remove('alert-success', 'alert-error');
		alertBox.classList.add(
			type === 'success' ? 'alert-success' : 'alert-error'
		);
	}

	function applyPreferences(theme) {
		document.body.classList.remove('light', 'dark');

		document.body.classList.add(theme);
	}
});
