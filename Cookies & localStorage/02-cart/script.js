const products = ["pomme", "banane", "pêche", "fraise"];

const createProductCards = (arr) => {
	arr.forEach((element) => {
		const container = document.createElement("div");
		const name = document.createElement("p");
		const addBtn = document.createElement("button");
		addBtn.classList.add("add-btn");

		container.style.border = "2px solid black";
		container.style.width = "20%";
		container.style.display = "flex";
		container.style.flexDirection = "column";

		name.textContent = element;
		addBtn.textContent = "Ajouter au panier";
		container.appendChild(name);
		container.appendChild(addBtn);
		document.body.appendChild(container);
	});
};

createProductCards(products);

const cart = { products: [] };
const addButtons = document.getElementsByClassName("add-btn");
for (const btn of addButtons) {
	btn.addEventListener("click", () => {
		cart.products.push(btn.previousElementSibling.textContent);
		sessionStorage.setItem("cart", JSON.stringify(cart.products));
	});
}

const displayCart = () => {
	const cartContainer = document.createElement("div");

	const cart = JSON.parse(sessionStorage.getItem("cart"));
	cartContainer.style.border = "2px solid black";
	cartContainer.style.width = "20%";
	cartContainer.id = "cart-container";

	if (cart) {
		cart.forEach((element) => {
			const product = document.createElement("p");
			product.textContent = element;
			cartContainer.appendChild(product);
			document.body.appendChild(cartContainer);
		});
	}
};

const emptyCart = () => {
	sessionStorage.clear();

	const cartContainer = document.getElementById("cart-container");
	document.body.removeChild(cartContainer);
};

const showCartBtn = document.createElement("button");
showCartBtn.textContent = "Panier";
showCartBtn.addEventListener("click", displayCart);
document.body.appendChild(showCartBtn);

const emptyCartBtn = document.createElement("button");
emptyCartBtn.textContent = "Vider le panier";
emptyCartBtn.addEventListener("click", emptyCart);
document.body.appendChild(emptyCartBtn);
