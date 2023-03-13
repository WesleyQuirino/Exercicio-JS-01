let numberOne = Number(prompt("Digite o primeiro número"))
let numberTwo = Number(prompt("Digite o segundo número"))

alert(`A soma dos dois números é ${numberOne + numberTwo}`)
alert(`A subtração dos dois números é ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é ${numberOne / numberTwo}`)
alert(`A resto dos dois números é ${numberOne % numberTwo}`)

let checkNumber = (numberOne + numberTwo) % 2

if (checkNumber === 0) {
  alert(`O número ${numberOne + numberTwo} é par`)
} else {
  alert(`O número ${numberOne + numberTwo} é impar`)
}

if (numberOne === numberTwo) {
  alert(`Os números são iguas`)
} else {
  alert(`Os números inceridos são diferentes`)
}
