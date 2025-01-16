let counter = 0;

const etapeTerminee = () => {
	return `Etape terminée ${counter++}`;
};

const premiereEtape = async (callback) => {
	return await setTimeout(() => {
		console.log("étape 1");
		callback();
	}, 2000);
};

const deuxiemeEtape = async (callback) => {
	return await setTimeout(() => {
		console.log("étape 2");
		callback();
	}, 2000);
};

const promises = [premiereEtape(etapeTerminee), deuxiemeEtape(etapeTerminee)];

Promise.allSettled(promises).then(() =>
	console.log("toutes les étapes sont terminées")
);
