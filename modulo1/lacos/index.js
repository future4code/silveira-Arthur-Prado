// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// 1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?
// R - Enquanto i for menor que 5, o código vai sendo gerado em loop 1 por 1 de 0 até chegar no valor 4 e parar, imprimindo os valores.


// 2 -
//    a) O que vai ser impresso no console?
// // R - 19, 21, 23, 25, 27, 30

// // b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...`
// // é suficiente? Se sim, o que poderia ser usado para fazer isso?
// // R - sim, usando a propriedade length


// // 3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// // R - Teríamos 10 asteriscos, divididos em 4 linhas somando mais 1+ a cada linha que passa. (Começando 1 asterisco na linha 1.)


// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1 - 
// let quantosBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))

// if (quantosBichinhos === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }else {
//     let nomesBichinhos = []
//     let i = 0
//     while (i < quantosBichinhos){
//         nomesBichinhos.push(prompt(`Digite o nome deles, ${i+1}`))
//         i = i+1;
//     }
//     console.log(nomesBichinhos)

// }
    
   




    //2. Considere que você tenha acesso a um `array`  (chamado de 'array original') 
    //que é composto somente de números. Baseando-se nisso, crie uma função para cada 
    //um dos itens abaixo, realizando as operações pedidas:
    
    // a) Escreva um programa que **imprime** cada um dos valores do array original.
    const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function imprimeOriginal(){
        for(let i = 0; i < arrayOriginal.length; i++){
            const valor = arrayOriginal[i]
            console.log(valor)
        }
    }
    // imprimeOriginal()
    
    // b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    function dividePor10(){
        for(let i = 0; i < arrayOriginal.length; i++){
            let divisao = arrayOriginal[i] / 10
            console.log(divisao)
        }
    }
    //dividePor10()

    // c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array 
    //original e **imprima** esse novo array
    function criarArray(){
        let pares = []
        for(let i = 0; i < arrayOriginal.length; i++){
            let resto = arrayOriginal[i] % 2
            if (resto === 0){
                pares.push(arrayOriginal[i]) 
            }
        } 
        console.log(pares)
    }   
    
    criarArray()
    

    // d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
    //"O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
   

    // e) Escreva um programa que imprima no console o maior e o menor números contidos no 
    //array original

  
