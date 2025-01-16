const button = document.getElementById('sauvegarder');

document.addEventListener('click', () => {
	const texte = inputTexte.value;
	localStorage.setItem('utilisateur', texte);
	message.textContent = 'Texte sauvegardé avec succès !';
});

// Récupérer la valeur sauvegardée au chargement
document.addEventListener('DOMContentLoaded', () => {
	const texteSauvegarde = localStorage.getItem('utilisateur');
	if (texteSauvegarde) {
		inputTexte.value = texteSauvegarde;
	}
});
