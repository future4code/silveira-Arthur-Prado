// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1 a) O código pergunta ao usuário um número e responderá se passou no teste ou não. para passar no teste o numero 
// tem que ser divisível por 2 e ter o resto = 0

//   b) Só passarão no teste os números pares

//   c) A resposta "Não passou no teste" aparecerá em casa de números ímpares.

//2 a) Serve para identificar qual é o preço da fruta escolhida

// b) O preço da fruta Maçã é R$ 2.25

// c) Seria ignorado o case Pêra e acabaria vindo o preço default que é 5.

//3 a) Está criando uma variável numero e pedindo ao usuário pra inserir um número já no formato Number.

//  b) A mensagem seria "Esse número passou no teste" em caso de 10, já em caso de -10 seria "Undefined"

//  c) Daria, pois a mensagem está dentro do escopo da condicional If, então não é possível imprimir ela sem chamá-la no escopo global.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
//(apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// const idade = Number(prompt("Qual é a sua idade?"))
// if (idade >= 18) {
//     console.log("Você pode dirigir")
// }else {
//     console.log("Você não pode dirigir.")
// }

// // 2 Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) 
// // ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
// // Utilize o bloco if/else
// const turno = prompt("Qual turno você estuda? M(Matutino)/V(Vespertino)/N(Noturno)")

// if (turno === 'M'){
//     console.log("Bom Dia!")
// } else if (turno === 'V'){
//     console.log("Boa Tarde!")
// } else if (turno === 'N'){
//     console.log("Boa Noite!")
// }

// // 3 Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

// const qualTurno = prompt("Qual turno você estuda? M(Matutino)/V(Vespertino)/N(Noturno)")
// switch (qualTurno){
//     case 'M':
//         console.log('Bom Dia!')
//         break
//     case 'V':
//         console.log('Boa Tarde!')
//         break
//     case 'N':
//         console.log('Boa Noite!')
//         break    
// }

// 4 Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você 
//se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o
// gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga 
//vai topar assistir o filme. 
//Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
// const qualGenero = prompt("Qual gênero de filme vamos assistir?")
// const precoIngresso = Number (prompt("Qual o preço do ingresso em reais?"))
// const lanchinho = prompt("Qual lanche você vai comprar?")

// if (qualGenero.toLowerCase() == 'fantasia' && precoIngresso < 15){
//     console.log("Bom filme!")
//     console.log(`Aproveite o seu/sua ${lanchinho}`)
// } else {
//     console.log("Escolha outro filme :(")
// }

//Desafios 
// 1 - Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
//pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens
// "Bom filme!" 
//e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.


// 2 - 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra,
// o usuário deve fornecer algumas informações:
    // - Nome completo;
    // - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    // - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    // - Categoria: pode ser as opções 1, 2, 3 ou 4;
    // - Quantidade de ingressos
    
    // O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, 
    //junto com o valor de cada ingresso e o valor total que o usuário tem que pagar 
    //(ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
    //Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
    //Lembrando que o valor de jogos internacionais 
    //é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

    const nomeCompleto = prompt("Qual o seu nome completo?")

    let tipoDeJogo = prompt("O Jogo é DO(doméstico) ou IN (internacional?")
   
    let etapaDoJogo = prompt("O jogo é SF(semi-final), DT(Decisão de terceiro lugar) ou FI(final)?").toUpperCase() 

    let categoria = +prompt(`Qual categoria você vai querer? [1, 2, 3 ou 4?]`)
    
    let quantidadeIngressos = +prompt("Quantos ingressos você vai querer?")
        
    let valorDoIngresso 
    
    if (etapaDoJogo === `SF`){
        switch (categoria){
            case 1: 
                valorDoIngresso = 1320
                break
            case 2:
                valorDoIngresso = 880
                break
            case 3:
                valorDoIngresso = 550
                break
            case 4:
                valorDoIngresso = 220
                break
        }

    } else if (etapaDoJogo === `DT`){
        switch (categoria){
            case 1: 
                valorDoIngresso = 660
                break
            case 2:
                valorDoIngresso = 440
                break
            case 3:
                valorDoIngresso = 330
            case 4: 
                valorDoIngresso = 170
                break 
        }
    
    } else {
        switch (categoria){
            case 1:
                valorDoIngresso = 1980
                break
            case 2:
                valorDoIngresso = 1320
                break
            case 3:
                valorDoIngresso = 880
                break
            case 4:
                valorDoIngresso = 330  
                break  
        }
    } 

let valorTotal = valorDoIngresso * quantidadeIngressos
if (tipoDeJogo === `IN`){
    valorTotal = valorTotal * 4.10
}
console.log(nomeCompleto)
console.log(`O tipo de jogo é: ${tipoDeJogo}`)
console.log(`A etapa do jogo é: ${etapaDoJogo}`)
console.log(`A categoria é: ${categoria}`)
console.log(`A quantidade de ingressos é: ${quantidadeIngressos}`)
console.log(`O valor total é: ${valorTotal}`)
