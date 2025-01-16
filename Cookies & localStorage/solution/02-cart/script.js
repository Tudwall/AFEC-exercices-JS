document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.add-to-cart');
	const cartList = document.getElementById('cart');

	const displayCart = () => {
		const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
		console.log('cart', cart);
		cartList.replaceChildren();
		cart.forEach((product) => {
			const li = document.createElement('li');
			li.textContent = product;
			cartList.appendChild(li);
		});
	};
	// To display at the beginning;
	displayCart();

	// Add To Cart Listener
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
			cart.push(button.dataset.product);
			sessionStorage.setItem('cart', JSON.stringify(cart));
			displayCart();
		});
	});

	//Clear cart Listener
	const clearBtn = document.getElementById('clear-cart');
	clearBtn.addEventListener('click', () => {
		sessionStorage.removeItem('cart');
		displayCart();
	});
});
