class User {
	constructor(nom, email, age) {
		this.nom = nom;
		this.email = email;
		this.age = age;
	}
}

let user1 = new User("Jean", "test@test.fr", "19");
let user2 = new User("Arnaud", "test2@test.fr", "25");

console.table(user1);
console.table(user2);
