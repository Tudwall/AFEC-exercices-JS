function modifierNombre(nombre, addition = 0, multiplication = 1) {
	return (nombre + addition) * multiplication // Applique l'addition puis la multiplication
}

console.log(modifierNombre(5)) // Affiche 5 (0 + 5) * 1
console.log(modifierNombre(5, 3)) // Affiche 8 (5 + 3) * 1
console.log(modifierNombre(5, 3, 2)) // Affiche 16 (5 + 3) * 2
