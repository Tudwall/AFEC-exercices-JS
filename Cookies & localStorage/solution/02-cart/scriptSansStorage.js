document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.add-to-cart');

	// Add To Cart Listener
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const cart = document.getElementById('cart');
			const li = document.createElement('li');
			li.textContent = button.dataset.product;
			cart.appendChild(li);
		});
	});

	//Clear cart Listener
	const clearBtn = document.getElementById('clear-cart');
	clearBtn.addEventListener('click', () => {
		const cart = document.getElementById('cart');
		cart.replaceChildren();
	});
});
