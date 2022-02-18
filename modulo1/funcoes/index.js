// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//1 -
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10) 
//1 - a) Serão impressas dois resultados de multiplicação: 10 / 50
//1 - b) Nada seria impresso.

//2 - 
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
//2- a) Essa função transformou a resposta do usuário: todas as letras do texto ficaram minúsculas com o "toLowerCase()" e o includes
//verifica se a palavra "cenoura", exatamente do jeito que escreve, se encontra no texto. Caso encontre, é TRUE, caso não encontre, FALSE
// b) As três frases ficariam como TRUE, pois o "toLowerCase()" transforma as letras maiusculas de CENOURA em minúsculas, fazendo
// com que a palavra se adeque para o "Includes("cenoura")".

//-------------EXERCÍCIOS DE ESCRITA DE CÓDIGO--------------

// 1 - a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
// "Meu nome é Arthur, tenho 26 anos, moro em São Paulo e sou estudante."

//  function imprimir(){
//  const frase = "Meu nome é Arthur, tenho 26 anos, moro em São Paulo e sou estudante"
//  console.log(frase)
// }
// imprimir()
 

// 1 - b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade
// (number), a cidade (string) e uma profissão (string).
// Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].



// function informar(nome, idade, endereco, profissao){
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`
// }
// function pedirDados(){
//     const nome= prompt ("Qual é o seu nome?")
//     const idade= prompt ("Qual é a sua idade")
//     const endereco= prompt ("Qual seu endereço?")
//     const profissao = prompt ("Qual a sua profissão?")
//     return informar(nome, idade, endereco, profissao)    
// }
// console.log(pedirDados())

// 2 - 2. Escreva as funções explicadas abaixo:
    
/* a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o 
//     resultado. Invoque a função e imprima no console o resultado.*/
// function somar(num1, num2){
// const soma = num1+num2
// return soma
// }
// const soma = somar(10, 20)
// console.log(soma)

// b) Faça uma função que recebe 2 números e retorne um booleano que
// informa se o primeiro número é maior ou igual ao segundo.

// function informar(num1, num2){
// const booleano = num1 >= num2
// return booleano
// }
// const booleano = informar(20,10)
// console.log(booleano)

// c) Escreva uma função que receba um número e devolva um 
// booleano indicando se ele é par ou não

// function devolver(n){
// const par = (n % 2) == 0
// return par
// }
// const par = devolver(4)
// console.log(par)

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro
// e imprima o tamanho dessa mensagem, 
// juntamente com uma versão dela em letras maiúsculas.

let frase = "Bom dia boa tarde boa noite" 

function mensagem(parametro){
    console.log(frase.length)
    console.log(frase.toUpperCase())
    return parametro
}
mensagem(frase)

// 3 
//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário 
//inserir dois números e chame essas 4 funções com esses valores imputados pelo usuário sendo o argumento. 
//Por fim, mostre no console o resultado das operações:

const pedido = +prompt ("Insira um número")
const pedido2 = +prompt ("Insira outro número")

function somar(a, b){
let soma = a + b
return soma 
}

let soma = somar(pedido, pedido2)
console.log(soma)

function subtrair(a, b){
let subtracao = a - b
return subtracao 
}
let subtracao = subtrair (pedido, pedido2)
console.log(subtracao)

function multiplicar(a, b){
let multiplicacao = a * b
return multiplicacao
}
let multiplicacao = multiplicar (pedido, pedido2)
console.log(multiplicacao)

function dividir(a, b){
    let divisao = a / b
return divisao
}
let divisao = dividir (pedido, pedido2)
console.log(divisao)




