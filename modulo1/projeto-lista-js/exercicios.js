// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = +prompt ("Qual a altura do retângulo?")
  const largura = +prompt ("Qual a largura do retângulo?")
 let ladoVezesLado = (altura * largura)
 console.log(ladoVezesLado)
}




// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = +prompt("Qual é o ano atual?")
  const suaIdade = +prompt("Qual o seu ano de nascimento?")
  let subtrair = (anoAtual - suaIdade)
  console.log(subtrair)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let IMC = (peso / (altura * altura))
  return IMC


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é seu nome?")
  const idade = +prompt("Quantos anos você tem?")
  const email = prompt("Qual é seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt(`Qual sua cor favorita?`)
  const cor2 = prompt(`Qual sua segunda cor favorita?`)
  const cor3 = prompt(`Qual sua terceira cor favorita?`)
  console.log([cor1, cor2, cor3])

}
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
const frase = string.toUpperCase() 
return frase //retornando const pra esclarecer
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const calculo = custo / valorIngresso
return calculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
const tamanho = string1 >= string2
return tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
const recebe = array[0]
return recebe
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
const ultimo = array
return ultimo[ultimo.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const a = array[0]
const b = array[array.length - 1]
array[0] = b
array[array.length - 1] = a
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
const igualdade = string1.toUpperCase() == string2.toUpperCase()
return igualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}