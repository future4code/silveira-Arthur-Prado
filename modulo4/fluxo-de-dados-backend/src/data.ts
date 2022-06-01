// Exercício 2 - 

type Produtos = {
    id: string,
    name: string,
    price: number
}

export const arrayDeProdutos:Produtos[] = [
    {
        id: Date.now().toString(),
        name: "Computador",
        price: 3000,
    },
    {
        id: Date.now().toString(),
        name: "Mouse",
        price: 200,
    },
    {
        id: Date.now().toString(),
        name: "Fones de ouvido",
        price: 300,
    },
]