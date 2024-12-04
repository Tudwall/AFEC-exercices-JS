const submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("form");
const lang = document.querySelectorAll("input[name='language']");
const theme = document.querySelectorAll("input[name='theme']");

let selectedLang;
let selectedTheme;

const checkLang = () => {
	for (const radio of lang) {
		if (radio.checked) {
			selectedLang = radio.value;
			return selectedLang;
		}
	}
};

const checkTheme = () => {
	for (const radio of theme) {
		if (radio.checked) {
			selectedTheme = radio.value;
			return selectedTheme;
		}
	}
};

const setCookie = (name, value, days) => {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = "expires=" + date.toUTCString();
	document.cookie = `${name}=${value}; ${expires};path=/`;
};

/* Autre façon de faire:
const getCookie = (name) => {
	const nameEQ = `${name}=`;
	const ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}; */

function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(";").shift();
}

const changeBackgroundColor = (color) => {
	if (color == "dark") {
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
	} else if (color == "light") {
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
	}
};

form.addEventListener("submit", (e) => {
	e.preventDefault();

	setCookie("lang", checkLang(), 1);
	setCookie("theme", checkTheme(), 1);
});

document.addEventListener("DOMContentLoaded", () => {
	const theme = getCookie("theme");
	changeBackgroundColor(theme);
});
