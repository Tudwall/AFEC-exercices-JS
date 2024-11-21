function modifierNombre(nombre, add, multi) {
	let result = nombre + add;
	result = result * multi;
	return result;
}
console.log(modifierNombre(3, 2, 2));
