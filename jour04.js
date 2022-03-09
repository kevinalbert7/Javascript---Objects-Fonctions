









// 01 - Object

const { format } = require("express/lib/response")
const { useTheme } = require("styled-components")

// - Créez une variable `cat` contenant les clés suivantes : `name` de valeur `"Garfield"`, `age` de valeur `3` et `isCute` de valeur `true`
// - Affichez `cat` dans la console
// - Affichez la valeur de `age` dans la console
// - À l'aide d'une condition, affichez "So cute !" si la valeur de `isCute` est `true`

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}

if (cat.isCute) {
    console.log("So Cute !")
}

console.log(cat)
console.log(cat.age)

    
// 02 - Combine
console.log("-----------------------------------02--------------------------------------")

// - Créez une variable `cat2` qui reprend la structure de cat : mettez d'autres valeurs pour chaque clé
// - Créez une variable `cats` qui contient un tableau contenant les variables `cat` et `cat2`
// - Affichez la valeur de `age` de `cat` (il y a deux façons de le faire) dans la console
// - Affichez la valeur de `isCute` de `cat2` (il y a deux façons de le faire) dans la console
    
var cat2 = {
    name: "Zephir",
    age: 6,
    isCute: true
}

var cats = [cat, cat2]

console.log(cats[0].age)
console.log(cats[0]["age"])

console.log(cats[0].isCute)
console.log(cats[0]["isCute"])
    
// 03 - Even
console.log("-----------------------------------03--------------------------------------")

// - Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
// - Dans la fonction, à l'aide d'une condition, affichez "even" si `num` est pair, "odd" si il est impair
// - Appelez votre fonction plusieurs fois avec des chiffres différents comme argument pour vérifier les résultats


checkIfEven = (num) => {
    if (num % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}

checkIfEven(4)
checkIfEven(7)
checkIfEven(8)

// 04 - Compare
console.log("-----------------------------------04--------------------------------------")

// - Créez une fonction `compare` qui reçoit deux paramètres `num1` et `num2`
// - Dans la fonction, à l'aide d'une condition, affichez selon les cas :
//     - "`num1` is bigger" si `num1` est plus grand
//     - "`num2` is bigger" si `num2` est plus grand
//     - "both are the same" si ils sont égaux
// - Appelez votre fonction plusieurs fois avec des chiffres différents pour vérifier les résultats
    
compare = (num1, num2) => {
    if (num1 > num2) {
        console.log(`${num1} is bigger than ${num2}`)
    } else if (num1 < num2) {
        console.log(`${num2} is bigger than ${num1}`)
    } else {
        console.log(`both are the same`)
    }
}

compare(1, 6)
compare(4, 2)
compare(7, 7)
    
// 05 - Add Up
console.log("-----------------------------------05--------------------------------------")

// - Créez une fonction `addUp` qui reçoit un paramètre `num`
// - À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
// - Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78
    
addUp = (num) => {
    var sum = 0

    for(var i = 1; i <= num; i++) {
        sum = sum + i
        console.log(sum)
    }
}

addUp(12)
    
// 06 - Time
console.log("-----------------------------------06--------------------------------------")

// - Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
// - Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
// - Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`
 
const formatTime = (num) => {
    for (var i = 0; i <= num; i++) {
        var minutesRemaining = num % 3600
        var hours = (num - minutesRemaining) / 3600

        var secondsRemaining = minutesRemaining % 60
        var minutes = (minutesRemaining - secondsRemaining) / 60
    }

    console.log(`${hours}:${minutes}:${secondsRemaining}`)
}

formatTime(3700)

//function formatVincent(num) {
//     var hours = Math.floor(num / 3600)
//     num %= 3600
  
//     var minutes = Math.floor(num / 60)
//     var seconds = Math.floor(num % 60)
  
//     return `${hours}:${minutes}:${seconds}`
//   }
  
//   var result = formatVincent(3700)
//   console.log("Vincent's solution")

// ⭐ Bonus
console.log("-----------------------------------Bonus--------------------------------------")

// - Créez une fonction `generatePassword` qui reçoit un paramètre `num`
// - La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
// - Le mot de passe contiendra uniquement des lettres majuscules
// - Si `num` est plus petit que 6 ou plus grand que 15, la fonction retourne "error"


const generatePassword = (num) => {
    
    const array = []
    if (num < 6 || num > 15) {
        return "error"
    } else {
        for (var i = 0; i <= num; i++) {
            let random = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65) // Les lettres de l'alphabet en table ASCII vont de 65 à 90
            array.push(random)
            var password = array.join("")
        }
        return password
    }
}

var result1 = generatePassword(5)
var result2 = generatePassword(20)
var result3 = generatePassword(13)

console.log(result1)
console.log(result2)
console.log(result3)

// ⭐ Bonus II
console.log("-----------------------------------Bonus II--------------------------------------")

// - Créez une fonction `launchDice` qui reçoit un paramètre `numberOfDice`
// - La fonction va lancer aléatoirement des dés, une quantité de fois égale à la valeur de `numberOfDice` et retourner leur somme
// - Appelez la fonction deux fois avec pour argument 5, une fois pour un `joueur1` et l'autre pour le `joueur2`.
// - Comparez les valeurs des deux joueurs et Affichez le joueur gagnant (celui ayant le plus grand score)

const launchDice = (numberOfDice) => {
    
    var result = 0

    for (var i = 0; i < numberOfDice; i++) {
        result += Math.floor(Math.random() * (6 - 1 + 1)) + 1
    }
    return result
}

var player1 = launchDice(5)
var player2 = launchDice(5)

    if (player1 > player2) {
        console.log("Player1 win !")
    } else if (player1 < player2) {
        console.log("Player2 win !")
    } else {
        console.log("Egality !")
    }