/* Objectif : Simuler une commande en ligne

    => Créez une fonction commanderProduit qui retourne une promesse.
    => Simulez un délai avec setTimeout.
    La promesse doit :
       - Être tenue si un produit est en stock.
       - Être rompue si le produit est en rupture de stock. */

const delay = (ms) => {
	console.log("début timer");
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
};

const commanderProduit = (stock) => {
	return delay(2000).then(() => {
		if (stock) {
			return true;
		} else {
			throw new Error("Produit hors stock");
		}
	});
};

commanderProduit(1) //0 ou 1
	.then((value) => {
		if (value) console.log("Produit en stock");
	})
	.catch((error) => {
		console.error(error);
	});
