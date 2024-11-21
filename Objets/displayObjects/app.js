const objects = [
	{
		cover: "#",
		artist: "Mitski",
		album: "Be the Cowboy",
		year: 2018,
		songs: 14,
		duration: "00:32:34",
	},
	{
		cover: "#",
		artist: "Black Sabbath",
		album: "13 (Deluxe Edition)",
		year: 2013,
		songs: 11,
		duration: "01:08:00",
	},
	{
		cover: "#",
		artist: "Electric Wizard",
		album: "Funeralopolis",
		year: 2000,
		songs: 9,
		duration: "01:15:00",
	},
	{
		cover: "#",
		artist: "Billie Eilish",
		album: "HIT ME HARD AND SOFT",
		year: 2024,
		songs: 10,
		duration: "00:43:50",
	},
	{
		cover: "#",
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
	Object.values(element).forEach((value) => {
		const para = document.createElement("p");
		para.textContent = value;
		card.appendChild(para);
	});
	card.style.border = "2px solid black";
	card.style.display = "flex";
	card.style.flexDirection = "column";
	card.style.padding = "0.5em";
	card.style.gap = "0.1em";
	card.style.width = "15%";
	container.appendChild(card);
});
