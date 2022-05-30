//1- a) Resposta: Eu determinei que a variável seria uma string, impedindo colocar numero como valor.
// const minhaString: string = 1

//1 - b) Resposta: Utilizando o Operador OU (com barra única)
// const meuNumero: number | string  = 1

//1 - c)
//1 - d)
enum CorFavorita {
    VERMELHA = "Vermelha",
    LARANJA = "Laranja",
    AMARELA = "Amarela",
    VERDE = "Verde",
    AZUL = "Azul",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string
    idade: number
    corFavorita: string
}

const pessoa1: Pessoa = {
    nome: "Arthur",
    idade: 27,
    corFavorita: CorFavorita.VERDE
}

const pessoa2: Pessoa = {
    nome: "Rodrigo",
    idade: 28,
    corFavorita: CorFavorita.VIOLETA
}

const pessoa3: Pessoa = {
    nome: "João",
    idade: 30,
    corFavorita: CorFavorita.AZUL
}

console.log(pessoa3)