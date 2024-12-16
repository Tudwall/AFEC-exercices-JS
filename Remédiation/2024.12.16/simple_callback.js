const getHours = () => {
	return new Date().getHours();
};

const salutationFormelle = (nom) => {
	const heure = getHours();
	if (6 < heure < 12) {
		console.log(`Bonne matinée, M. ou Mme ${nom}`);
	} else if (12 < heure < 18) {
		console.log(`Bon après-midi, M. ou Mme ${nom}`);
	} else if (heure > 18) {
		console.log(`Bonsoir, M. ou Mme. ${nom}`);
	} else {
		console.log(`Bonjour M. ou Mme ${nom}`);
	}
};

const salutationMultilingue = (nom, lang) => {
	const lowercaseLang = lang.toLowerCase();
	switch (lowercaseLang) {
		case "anglais":
			console.log(`hi ${nom}!`);
			break;
		case "français":
			console.log(`Salut ${nom} !`);
			break;
		case "espagnol":
			console.log(`Buenos dias ${nom} !`);
			break;
		default:
			console.log("Langue non supportée");
			break;
	}
};

const salutationInformelle = (nom) => {
	console.log(`Salut ${nom} !`);
};

const saluerUtilisateur = (nom, callback, lang) => {
	callback(nom, lang);
};

saluerUtilisateur("john", salutationMultilingue, "anglais");
saluerUtilisateur("John", salutationFormelle);
saluerUtilisateur("John", salutationInformelle);
