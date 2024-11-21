let nombres = [1, 2, 3, 4, 5, 6, 7, 8]
let resultat = nombres.filter((x) => x % 2 === 0).map((x) => x * 2)
console.log(resultat) // [4, 8, 12, 16]

let fruits = ['banane', 'Pomme', 'orange', 'kiwi']
fruits.sort()
console.log(fruits) // ["banane", "kiwi", "orange", "pomme"]
fruits.sort((a, b) => a.localeCompare(b))
console.log(fruits) // ["banane", "kiwi", "orange", "pomme"]
