/* Objectif : Simuler une commande en ligne

    => Créez une fonction commanderProduit qui retourne une promesse.
    => Simulez un délai avec setTimeout.
    La promesse doit :
       - Être tenue si un produit est en stock.
       - Être rompue si le produit est en rupture de stock. */

async function orderProduct(isInStock) {
	console.log('Processing your order...');
	await delay(2000); // Attend 2 secondes

	if (isInStock) {
		return 'Order confirmed! ✅';
	} else {
		throw new Error('Product is out of stock. ❌');
	}
}

async function delay(ms) {
	await new Promise((resolve) => setTimeout(resolve, ms));
}

// Test the function with try...catch
async function testOrder() {
	try {
		const message = await orderProduct(true); // Change true/false to test both cases
		console.log(message);
	} catch (error) {
		console.error(error.message);
	}
}

testOrder();
