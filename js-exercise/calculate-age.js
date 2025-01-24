alert("Calculador de diferença de idade")

let olderName = prompt("Qual é o nome da pessoa mais velha?")
let olderAge = prompt("Qual é a idade da pessoa mais velha?")

let youngerName = prompt("Qual é o nome da pessoa mais nova?")
let youngerAge = prompt("Qual é a idade da pessoa mais nova?")

let ageDifference = olderAge - youngerAge

alert(olderName + " tem " + olderAge + " anos ")
alert(youngerName + " tem " + youngerAge + " anos ")

alert(olderName + " é " + ageDifference + " anos mais velho(a) que " + youngerName)