let animaux = ['chien', 'cat', 'lapin']
console.log(animaux)

let couleurs = ['rouge', 'vert', 'bleu']
console.log(couleurs[1]) // Affiche "vert"

animaux[0] = 'hamster'
console.log(animaux) // Affiche ["hamster", "chat", "lapin"]

animaux.push('perroquet') // ajoute perroquet à la fin
animaux.shift() // supprime le premier élément
console.log(animaux)

console.log(animaux.includes('chat'))

let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(nombres.length) // Affiche 10

let valeurs = [1, 2, 2, 3, 4, 4, 5]
let unique = valeurs.filter((val, index) => valeurs.indexOf(val) === index)
console.log(unique) // [1, 2, 3, 4, 5]
