const dogBtn = document.getElementById("getChien");
const main = document.querySelector("main");
const image = document.createElement("img");

const fetchChien = () => {
	fetch("https://dog.ceo/api/breeds/image/random")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to get dog");
			}
			return response.json();
		})
		.then((data) => {
			console.log(data);
			image.setAttribute("src", `${data.message}`);
			main.appendChild(image);
		})
		.catch((error) => {
			console.error("Erreur: ", error);
		});
};

dogBtn.addEventListener("click", fetchChien);
