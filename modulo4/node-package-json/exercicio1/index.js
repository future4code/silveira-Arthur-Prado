
// Exercicio 1 - a
// acessamos os parâmetros ao utilizar o process.agrv
// 1 - b
    let nome = process.argv[2]
    let idade = Number(process.argv[3])
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
// // 1 - c
    const novaIdade = Number(idade + 7)
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`)
