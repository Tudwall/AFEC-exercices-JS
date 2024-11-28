document
	.getElementById('loadImageBtn')
	.addEventListener('click', async function () {
		const dogImageContainer = document.getElementById('dogImageContainer');
		const errorMessage = document.getElementById('errorMessage');

		// Réinitialiser les messages d'erreur précédents
		errorMessage.textContent = '';

		try {
			// Appel API pour récupérer une image de chien aléatoire
			const response = await fetch('https://dog.ceo/api/breeds/image/random');
			const data = await response.json();

			if (data.status === 'success') {
				// Afficher l'image
				const imgElement = document.getElementById('dogImage');
				imgElement.src = data.message;
				imgElement.alt = 'Image de chien';
			} else {
				throw new Error("Impossible de récupérer l'image");
			}
		} catch (error) {
			// En cas d'erreur, afficher un message d'erreur
			errorMessage.textContent = 'Erreur : ' + error.message;
		}
	});
