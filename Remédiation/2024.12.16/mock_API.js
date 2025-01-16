const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getUserData = (userId) => {
	return delay(Math.random() * 2000).then(() => {
		return (user = {
			id: userId,
			nom: "John",
			email: "john@example.com",
		});
	});
};

const getUserPosts = (userId) => {
	return delay(Math.random() * 2000).then(() => {
		return (post = {
			name: "Intro",
			content: `Salut à tous c'est ${this.nom}`,
		});
	});
};

console.log(getUserData(20));
console.log(getUserPosts(20));
