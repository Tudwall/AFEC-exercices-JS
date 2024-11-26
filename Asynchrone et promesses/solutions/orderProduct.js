/* Objectif : Simuler une commande en ligne

    => Créez une fonction commanderProduit qui retourne une promesse.
    => Simulez un délai avec setTimeout.
    La promesse doit :
       - Être tenue si un produit est en stock.
       - Être rompue si le produit est en rupture de stock. */

function orderProduct(isInStock) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			isInStock ? resolve('order confirmed') : reject('no product');
		}, 2000);
	});
}

orderProduct(true)
	.then((message) => console.log(message))
	.catch((error) => console.error(error));

orderProduct(false)
	.then((message) => console.log(message))
	.catch((error) => console.error(error));
