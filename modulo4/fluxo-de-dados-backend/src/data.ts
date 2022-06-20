// Exercício 2 - 

export type Produtos = {
    id: string,
    name: string,
    price: number
}

export let arrayDeProdutos:Produtos[] = [
    {
        id: (Date.now()+1).toString(),
        name: "Computador",
        price: 3000,
    },
    {
        id: (Date.now()+2).toString(),
        name: "Mouse",
        price: 200,
    },
    {
        id: (Date.now()+3).toString(),
        name: "Fones de ouvido",
        price: 300,
    },
]