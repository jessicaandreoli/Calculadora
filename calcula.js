function calcula(numeroA, operador, numeroB) {
  let resultado = 0

  switch (operador) {
    case '+':
      resultado = adicao(numeroA, numeroB)
      break
    case '-':
      resultado = subtracao(numeroA, numeroB)
      break
    case '*':
      resultado = multiplicacao(numeroA, numeroB)
      break
    case '/':
      resultado = divisao(numeroA, numeroB)
    default:
      resultado = porcentagem(numeroA, numeroB)
  }
  console.log(resultado)
}

function adicao(numeroA, numeroB) {
  return numeroA + numeroB
}

function subtracao(numeroA, numeroB) {
  return numeroA - numeroB
}

function multiplicacao(numeroA, numeroB) {
  return numeroA * numeroB
}

function divisao(numeroA, numeroB) {
  return numeroA / numeroB
}

function porcentagem(numeroA, numeroB) {
  return (numeroA * numeroB) / 100
}

calcula(3, '', 2)
