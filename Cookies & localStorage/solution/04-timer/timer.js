document.addEventListener('DOMContentLoaded', () => {
	const startButton = document.getElementById('startButton');
	const resetButton = document.getElementById('resetButton');
	const timerDisplay = document.getElementById('timer');

	let timerInterval;
	let elapsedTime = parseInt(sessionStorage.getItem('elapsedTime')) || 0;

	// Display the current time from sessionStorage when the page loads
	timerDisplay.textContent = elapsedTime;

	// Function to start or stop the timer
	function startTimer() {
		if (timerInterval) {
			clearInterval(timerInterval);
			timerInterval = null;

			startButton.textContent = 'Start';

			sessionStorage.setItem('elapsedTime', elapsedTime); // Save the elapsed time in sessionStorage
		} else {
			startButton.textContent = 'Stop';

			timerInterval = setInterval(() => {
				elapsedTime++;
				timerDisplay.textContent = elapsedTime;
			}, 1000);
		}
	}

	// Function to reset the timer
	function resetTimer() {
		clearInterval(timerInterval);
		elapsedTime = 0;
		sessionStorage.setItem('elapsedTime', elapsedTime); // Save the reset time in sessionStorage
		timerDisplay.textContent = elapsedTime;
		startButton.textContent = 'Start';
	}

	// Add event listeners
	startButton.addEventListener('click', startTimer);
	resetButton.addEventListener('click', resetTimer);

	// Disable reset button if no timer has started
	if (elapsedTime === 0) {
		resetButton.disabled = true;
	} else {
		resetButton.disabled = false;
	}
});
