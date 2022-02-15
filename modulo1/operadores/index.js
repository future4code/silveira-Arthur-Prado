// Exercícios de Interpretação de Código
// // 1 -

// const bool1 = true;
// const bool2 = false;
// const bool3 = !bool2;

// let resultado = bool1 && bool2;
// console.log("a. ", resultado); // False

// resultado = bool1 && bool2 && bool3; 
// console.log("b. ", resultado); // False

// resultado = !resultado && (bool1 || bool2); 
// console.log("c. ", resultado); // True

// console.log("d. ", typeof resultado); // Boolean

// // 2 e 3 - Antes de arrumar o código, apareceria os números que você colocou em sequência. Arrumando o código com um sinal de soma (+) antes do prompt, você dá a característica necessária pro código efetuar uma soma.

// let primeiroNumero = + prompt("Digite um numero!");
// let segundoNumero = + prompt("Digite outro numero!");

// const soma = primeiroNumero + segundoNumero;

// console.log (soma);

// Exercícios de Escrita de Código

// 1 -

// const idade= + prompt ("Qual a sua idade?");
// const idadeAmigo= + prompt ("Qual a idade do seu melhor amigo(a)?");
// let maisVelho= ("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo);
// let quaoMaisVelho= ("Diferença de idade:", idade - idadeAmigo);

// console.log (idade);
// console.log (idadeAmigo);
// console.log (maisVelho);
// console.log (quaoMaisVelho);

// 2 - 

// const numero= + prompt("Insira um número par.");
// console.log ("Resto da divisão por 2:", numero % 2 );

// 2 - c) O resto é sempre 0.

// 2 - d) O resto da divisão é sempre 1.

// 3 -

// const idade= + prompt("Quantos anos você tem?");
// let meses= idade * 12;
// let dias= idade * 365;
// let horas= idade * 365 * 24;

// console.log ("Sua idade em meses:", meses);
// console.log ("Sua idade em dias:", dias);
// console.log ("Sua idade em horas:", horas);

// 4 -
let num1= + prompt("Escolha um número!");
let num2= + prompt("Escolha outro número!");
let numMaior= num1 > num2;
let numIgual= num1 === num2;
let numDivisivel= num1 % num2 === 0;
let numDivisivel2= num2 % num1 === 0;

console.log ("O primeiro numero é maior que o segundo?", numMaior);
console.log ("O primeiro numero é igual ao segundo?", numIgual);
console.log ("O primeiro numero é divisível pelo segundo?", numDivisivel);
console.log ("O segundo numero é divisível pelo primeiro?", numDivisivel2);

