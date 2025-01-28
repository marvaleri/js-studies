let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Qual o nome da nave?")

chosenOption = prompt("Deseja realizar uma dobra espacial?\n1- SIM\n2- NÃO")

while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Desejar realizar a próxima dobra espacial?\n1- SIM\n2- NÃO")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount)