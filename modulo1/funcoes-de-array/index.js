// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// 1 - Aparecerá os nomes e apelidos, os índices e o array.
// 2 - Irá retornar apenas os nomes de dentro do array.
// 3 - Irá retornar apenas os nomes/apelidos de 'Mandi' e 'Laura' dentro de um array. Ou, os nomes/apelidos
// que não contenham "Chijo".


// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  //a) Crie um novo array que contenha apenas o nome dos doguinhos
 const nomeDosDoguinhos = pets.map((pet, indice, array) => {
    return pet.nome
 })
 console.log(nomeDosDoguinhos)

// // b) Crie um novo array apenas com os cachorros salsicha
const cachorrosSalsicha = pets.filter((pet, indice, array) => {
    return pet.raca === "Salsicha"
})
console.log(cachorrosSalsicha)

// c) c) Crie um novo array que possuirá mensagens para enviar 
// para todos os clientes que são poodles. A mensagem deve ser: "
// Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const doguinhosPoodles = pets.filter((item) => {
    return item.raca === 'Poodle'; // Retorna True or False ver linhas 79 e 88 (outra forma)
})    

const doguinhoNomes = doguinhosPoodles.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
    })
console.log(doguinhoNomes)

// 2 - 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//  a) Crie um novo array que contenha apenas o nome de cada item
const nomeDosProdutos = produtos.map((item, indice, array) => {
    return item.nome 
})
console.log(nomeDosProdutos)

// b) Crie um novo array que contenha um objeto com o nome
// e o preço de cada item, aplicando 5% de desconto em todos eles

const produtosComDesconto = produtos.map((item) => {
    const produtoNome = item.nome 
    const produtoPreco = item.preco 
    const objeto = {
        nome: produtoNome, 
        preco: produtoPreco * 0.95
    }
 return objeto 
})
console.log(produtosComDesconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const categoriaBebidas = produtos.filter((item) => {
    const eBebida = item.categoria === "Bebidas"; // Retorna True or False
    return eBebida
})
console.log(categoriaBebidas)

// d) d) Crie um novo array que contenha apenas os objetos cujo nome contenha 
// a palavra "Ypê"

const novoArray = produtos.filter((item) => {
    const palavra = item.nome.includes("Ypê") // Retorna True or False
    return palavra
})
console.log(novoArray)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const arrayNovo = novoArray.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
}
)
console.log(arrayNovo)