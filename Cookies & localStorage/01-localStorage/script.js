const input = document.getElementById("input-texte");
const saveBtn = document.getElementById("sauvegarder");
const message = document.getElementById("message");
const loadBtn = document.getElementById("load");
const displayStorage = document.getElementById("display-storage");
const clearBtn = document.getElementById("clear");

saveBtn.addEventListener("click", () => {
	localStorage.setItem("nom", input.value);
	message.textContent = "Sauvegarde effectuée";
});

loadBtn.addEventListener("click", () => {
	const nom = localStorage.getItem("nom");
	if (nom) {
		displayStorage.textContent = nom;
	} else {
		displayStorage.textContent = "Rien dans le localStorage";
	}
});

clearBtn.addEventListener("click", () => {
	localStorage.clear();
});

document.addEventListener("DOMContentLoaded", () => {
	const nom = localStorage.getItem("nom");
	if (nom) {
		input.value = nom;
	} else {
		input.value = "";
	}
});
