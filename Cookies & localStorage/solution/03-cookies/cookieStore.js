document.addEventListener('DOMContentLoaded', () => {
	const formPreferences = document.getElementById('form');
	const languageSelect = document.getElementById('language');

	const themeSelect = document.getElementById('theme');
	// Ajouter un cookie
	function setCookie(name, value, days) {
		console.log('set', name, value);
		cookieStore.set({
			name: name,
			value: value,
			expires: new Date(Date.now() + days * 24 * 60 * 60 * 1000), // 7 jours
		});
	}

	async function getCookie(name) {
		const cookie = await cookieStore.get(name);
		return cookie ? cookies : null;
	}

	// Supprimer un cookie
	async function suppressCookies(name) {
		await cookieStore.delete(name);
	}

	async function displayInput() {
		const langue = (await getCookie('langue')) || 'fr';
		const theme = (await getCookie('theme')) || 'light';
		languageSelect.value = langue;
		themeSelect.value = theme;
		return theme;
	}

	applyPreferences();

	formPreferences.addEventListener('submit', async (e) => {
		e.preventDefault();
		console.log('submit');
		try {
			console.log('submot', languageSelect.value);
			setCookie('langue', languageSelect.value, 7);
			setCookie('theme', themeSelect.value, 7);
			await applyPreferences(themeSelect.value);
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

	async function applyPreferences(theme) {
		if (!theme) {
			const theme = await displayInput();
		}
		document.body.classList.remove('light', 'dark');
		if (theme) {
			document.body.classList.add(theme);
		}
	}
});
