let pilotName = prompt("Qual seu nome piloto?")

let velocity = 0

let newVelocity = prompt("Gostaria de acelerar a nave a qual velocidade?")

let confirmVelocity = confirm("Deseja confirmar a velocidade " + newVelocity + " km/s?")

if (confirmVelocity){
    velocity = newVelocity
}

if (velocity <= 0 ){
    alert("Nave está parada. Considere partir e acelerar")
} else if (velocity < 40){
    alert("Você está devagar. Podemos aumentar mais")
} else if (velocity < 80){
    alert("Parece uma boa velocidade para manter")
} else if (velocity < 100){
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado")
}

alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + " km/s")