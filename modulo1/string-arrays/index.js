//Exercícios de interpretação de código
// let array
// console.log('a. ', array)//undefined

// array = null
// console.log('b. ', array) //null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) //11 

// let i = 0
// console.log('d. ', array[i])//3

// array[i+1] = 19
// console.log('e. ', array)//(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)//9

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//"Subi num ônibus em Marrocos" Nova Frase: "SUBI NUM ÔNIBUS EM MIRROCOS" 27

//Exercícios de escrita de código
//1 -
const nomeDoUsuario = prompt ("Qual é seu nome?");
const emailDoUsuario = prompt ("Qual é seu email?");

console.log ("O email "+ emailDoUsuario +" foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario +"!");

('O e-mail  + $emailDoUsuario +  "foi cadastrado com sucesso. Seja bem-vinda(o)",  $nomeDoUsuarioo!')

//2 - a)
const comidasPreferidas = ["Pizza", "Hamburguer", "Parmeggiana", "Strogonoff", "Sushi"];
console.log (comidasPreferidas);

// //2 - b)
console.log(`Essas são as minhas comidas preferidas:
- ${comidasPreferidas[0]}
- ${comidasPreferidas[1]}
- ${comidasPreferidas[2]}
- ${comidasPreferidas[3]}
- ${comidasPreferidas[4]}`);

//c)
comidasPreferidas [1]= prompt ('Qual a sua comida preferida?');
console.log(`Essas são as minhas comidas preferidas:
- ${comidasPreferidas[0]}
- ${comidasPreferidas[1]}
- ${comidasPreferidas[2]}
- ${comidasPreferidas[3]}
- ${comidasPreferidas[4]}`);

//3 - a)
const listaDeTarefas = [];

//b)
listaDeTarefas[0] = prompt("Fale uma tarefa do seu dia.");
listaDeTarefas[1] = prompt("Fale outra tarefa do seu dia.");
listaDeTarefas[2]= prompt("Fale mais uma tarefa do seu dia.");

//c) 
console.log (listaDeTarefas);

//d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
const qualTarefa = prompt("Você já realizou qual índice de tarefa?");

//e)
listaDeTarefas.splice(qualTarefa, 1);

//f)
console.log (listaDeTarefas);

// DESAFIO 1 -
const frase = "Hoje vou jogar um volei"
const separador = " "
console.log(frase.split(separador));

