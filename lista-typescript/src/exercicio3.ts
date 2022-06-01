enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Informacoes = {
    nomeDoFilme: string,
    anoDeLancamento: number,
    generoDoFilme: GENERO,
    informacaoOpcional: number
}


const streaming = (nomeDoFilme:string, anoDeLancamento:number, generoDoFilme:GENERO , informacaoOpcional?:number) => {
  const organiza: Informacoes = {
      nomeDoFilme: nomeDoFilme,
      anoDeLancamento: anoDeLancamento,
      generoDoFilme: generoDoFilme,
      informacaoOpcional: informacaoOpcional
  }
  return organiza
}

console.log (streaming("Duro de matar", 1999, GENERO.ACAO, 9.5))