// Sélection des éléments
const messageInput = document.getElementById('message');
const showAlertButton = document.getElementById('show-alert');
const showFixedAlertButton = document.getElementById('show-fixed-alert');
const resetButton = document.getElementById('reset');
const alertZone = document.getElementById('alert-zone');

// Gestion de l'alerte personnalisée
showAlertButton.addEventListener('click', () => {
	const message = messageInput.value.trim();
	if (message === '') {
		alert('Veuillez entrer un message !');
	} else {
		alert(message);
		alertZone.textContent = message;
		alertZone.hidden = false;
	}
});

// Gestion de l'alerte préconfigurée
showFixedAlertButton.addEventListener('click', () => {
	const fixedMessage = 'Ceci est une alerte préconfigurée.';
	alert(fixedMessage);
	alertZone.textContent = fixedMessage;
	alertZone.hidden = false;
});

// Réinitialisation
resetButton.addEventListener('click', () => {
	messageInput.value = '';
	alertZone.textContent = '';
	alertZone.hidden = true;
});
