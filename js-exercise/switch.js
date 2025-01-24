let distanceLightYear = prompt("Qual a distância em anos-luz?")

let chosenOption = prompt("Digite a opção que deseja converter: \n1 - Parsec \n2 - Unidade Astronônmica \n3 - Quilômetros")

let chosenUnity
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceLightYear * 0.306601
        break
    case "2":
        chosenUnity = "Unidadde astronômica"
        convertedDistance = distanceLightYear * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceLightYear * 9.5 * Math.pow(10,12)
        break
    default:
        chosenOption = "Unidade não identificada"
        convertedDistance = "Conversão fora de escopo"
}

alert("Distância em Anos-Luz: " + distanceLightYear + "\n" + chosenUnity + ": " + convertedDistance)