//Exercícios de Interpretação de Código!
// 1 - a) 1 - Matheus Nachtergaele
//        2 - Virginia Cavendish
//        3 - Globo 14h

// 2  - a) 1 - nome: Juca,
//             idade: 3, 
//             raca: SRD

//         2 - nome: Juba,
//             idade: 3, 
//             raca: SRD
//         
//         3 - nome: Jubo,
//             idade: 3, 
//             raca: SRD

// 2 - b) Elas clonam a variável chamada para realizar alguma alteração ou acrescentar algo.


// 3 - a) 1 - false 
//        2 - undefined
//     b) O valor inicial que veio se refere a "Backender", que no caso é falso, já o segundo valor deu undefined pois "altura"
// não tem um valor definido no código.

// Exercícios de Escrita de Código

// 1. Resolva os passos a seguir: 
    
// a) 
// const objeto = {
//     nome: "Pedro",
//     apelidos: ["Pedrinho", "Pedroca", "Pedrão"]
// }
// function novaFuncao(parametro){
//     console.log(`Meu amigo chama ${parametro.nome}, mas pode chama-lo de: ${parametro.apelidos[0]}, ${parametro.apelidos[1]}, ou ${parametro.apelidos[2]}`)
// }
// novaFuncao(objeto)

// // b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
// // mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const novoObjeto = {
// ...objeto,
// apelidos: ["Pedróleo", "Pedrito", "Pedruska"]
// }
// novaFuncao(novoObjeto)

//2. 

const objeto1 = {
    nome: "Arthur",
    idade: 26,
    profissao: "Estudante",
}
const objeto2 = {
    nome: "José",
    idade: 47,
    profissao: "Marceneiro",
}
function novaFuncao(parametro) {
return [parametro.nome, parametro.nome.length, parametro.idade, parametro.profissao, parametro.profissao.length]
}
console.log(novaFuncao(objeto1))
console.log(novaFuncao(objeto2))

//3 

const carrinho = []
const maca = {
    nome: "Maca",
    disponibilidade: true
}
const morango = {
    nome: "Morango",
    disponibilidade: true,
}
const banana = {
    nome: "Banana",
    disponibilidade: true,
}
function adiciona(frutas) {
carrinho.push(frutas)
}
adiciona(maca)
adiciona(morango)
adiciona(banana)
console.log(carrinho)