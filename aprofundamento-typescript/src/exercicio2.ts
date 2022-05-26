//2 - a)Entradas: numeros saída: Estatísticas
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados:number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{ maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//2 - b) Resposta: O parâmetro numeros é um array de números. 
//a variável numeros ordenados também é um array de números.
// a variável soma é um number.
// a variável estatísticas é um objeto de numbers

//2 - c)
type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: number[]
}