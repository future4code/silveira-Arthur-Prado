// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const tamanho = array.length
    return tamanho
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const invertido = array.reverse()
    return invertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let ordenado = array
    ordenado.sort((itemAtual, proximoItem) => {
        if (itemAtual < proximoItem) {
            return -1 // se o item atual for menor que o proximo item, ele vem antes (-1 ou menor que 0)
        }
        if (itemAtual > proximoItem) {
            return +1
        }
        return 0
    })

    return ordenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i])
        }
    }

    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = retornaNumerosPares(array)
    const paresElevados = numerosPares.map((numero) => {
        return numero * numero
    }
    )
    return paresElevados

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0];
    for (let i = 0; i < array.length; i += 1) {
        const numeroAtual = array[i]
        if (numeroAtual > maiorNumero) {
            maiorNumero = numeroAtual
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = num2
    let menorNumero = num1
    if (num1 - num2 > 0) {
        maiorNumero = num1
        menorNumero = num2
    }
    let maiorDivisivelPorMenor = false
    if (maiorNumero % menorNumero === 0) {
        maiorDivisivelPorMenor = true
    }
    let diferenca = maiorNumero - menorNumero

    const objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca,
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; i < n; i += 1) {
        numerosPares.push(i * 2)
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoC === ladoA) {
        return 'Equilátero'
    }
    if ((ladoA === ladoB && ladoB !== ladoC) ||
        (ladoB === ladoC && ladoC !== ladoA) ||
        (ladoA === ladoC && ladoB !== ladoA)) {
        return 'Isósceles'
    }
    if (ladoA !== ladoB && ladoC !== ladoB && ladoC !== ladoA) {
        return 'Escaleno'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = retornaArrayOrdenado(array)
    const segundoMenor = arrayOrdenado[1]
    const segundoMaior = arrayOrdenado[array.length - 2]
    return [segundoMaior, segundoMenor] // para retornar direto multiplos valores e necessario estar dentro de um array
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const objetoFilme = {
        nome: "O Diabo Veste Prada",
        ano: "2006",
        diretor: "David Frankel",
        atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }
    const frase = `Venha assistir ao filme ${objetoFilme.nome}, de ${objetoFilme.ano}, dirigido por ${objetoFilme.diretor} e estrelado por ${objetoFilme.atores[0]}, ${objetoFilme.atores[1]}, ${objetoFilme.atores[2]}, ${objetoFilme.atores[3]}.`
    return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let objetoDados = pessoa
    let objetoFinal = {
        ...objetoDados,
        nome: "ANÔNIMO"
    }
    return objetoFinal
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let podeEntrar = []
    for (let i = 0; i < pessoas.length; i++) {
        const novaPessoa = pessoas[i]
        if (novaPessoa.altura >= 1.5 && novaPessoa.idade > 14 && novaPessoa.idade < 60) {
            podeEntrar.push(novaPessoa)
        }
    }

    return podeEntrar
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoPodeEntrar = []
    for (let i = 0; i < pessoas.length; i++) {
        const pessoa = pessoas[i]
        if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            naoPodeEntrar.push(pessoa)
        }
    }
    return naoPodeEntrar
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i < contas.length; i++) {
        const comprasAtuais = contas[i].compras
        let comprasTotais = comprasAtuais.reduce((somaParcial, compra) => somaParcial + compra, 0)
        contas[i].compras = []
        contas[i].saldoTotal = contas[i].saldoTotal - comprasTotais
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const ordenado = consultas.sort((primeiroNome, proximoNome) => {
        if (primeiroNome.nome < proximoNome.nome) {
            return -1
        }
        if (primeiroNome.nome > proximoNome.nome) {
            return 1
        }
        return 0
    })
    return ordenado
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}