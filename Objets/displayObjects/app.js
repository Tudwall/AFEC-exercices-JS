const objects = [
	{
		cover: "/assets/img/be-the-cowboy.jpg",
		artist: "Mitski",
		album: "Be the Cowboy",
		year: 2018,
		songs: 14,
		duration: "00:32:34",
	},
	{
		cover: "/assets/img/13.jpg",
		artist: "Black Sabbath",
		album: "13 (Deluxe Edition)",
		year: 2013,
		songs: 11,
		duration: "01:08:00",
	},
	{
		cover: "/assets/img/dopethrone.jpg",
		artist: "Electric Wizard",
		album: "Dopethrone",
		year: 2000,
		songs: 9,
		duration: "01:15:00",
	},
	{
		cover: "/assets/img/hit-me-hard-and-soft.jpg",
		artist: "Billie Eilish",
		album: "HIT ME HARD AND SOFT",
		year: 2024,
		songs: 10,
		duration: "00:43:50",
	},
	{
		cover: "/assets/img/man-eater.jpg",
		artist: "El Tigr3",
		album: "Man-Eater",
		year: 2016,
		songs: 7,
		duration: "00:22:51",
	},
];

const container = document.getElementById("cards-container");
container.style.display = "flex";
container.style.flexDirection = "row";
container.style.gap = "1em";

objects.forEach((element) => {
	const card = document.createElement("div");
	for (let key in element) {
		const content = document.createElement(key == "cover" ? "img" : "p");
		switch (key) {
			case "cover":
				content.setAttribute("src", element[key]);
				break;
			case "artist":
				content.textContent = `Artiste: ${element[key]}`;
				break;
			case "album":
				content.textContent = `Album: ${element[key]}`;
				break;
			case "year":
				content.textContent = `Sorti en ${element[key]}`;
				break;
			case "songs":
				content.textContent = `${element[key]} morceau(x)`;
				break;
			case "duration":
				content.textContent = `Durée: ${element[key]}`;
				break;
		}
		content.style.margin = "0.5em";
		card.appendChild(content);
	}

	card.style.border = "2px solid black";
	card.style.display = "flex";
	card.style.flexDirection = "column";
	card.style.padding = "0.5em";
	card.style.gap = "0.1em";
	card.style.width = "15%";
	container.appendChild(card);
});
