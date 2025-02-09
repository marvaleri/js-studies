// Atention: This is a miniapp that will be used with moment.js library
// create a new file with the moment.js code

let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY): ")

let departureDate = moment(departureDateEntry, 'DD/MM/YYYY')

let today = moment()

let dateDifference = departureDate - today

let chosenOption = prompt("Escolha como gostaria de exibir a diferença de data: \n1 - Segundos \n2 - Minutos \n3 - Horas \n4 - Dias")

if (chosenOption == "1"){
    let secondsOfDeparture = Math.round(dateDifference / 1000)
    alert("Tempo de vôo " + secondsOfDeparture + " segundos")
} else if(chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDifference / 1000 / 60)
    alert("Tempo de vôo " + minutesOfDeparture + " minutos")
} else if(chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDifference / 1000 / 3600)
    alert("Tempo de vôo " + hoursOfDeparture + " horas")
} else if(chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDifference / 1000 / 3600 / 24)
    alert("Tempo de vôo " + daysOfDeparture + " dias")
} else {
    alert("Opção inválida")
}