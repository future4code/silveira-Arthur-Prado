const recebePalavra = (palavra:string):number => {
    const anagrama = palavra.length
    let fatorial:number = 1
    for (let i:number = anagrama; i > 0; i--){
        fatorial = fatorial * i
    }
    return fatorial
}
console.log(recebePalavra("comer"))