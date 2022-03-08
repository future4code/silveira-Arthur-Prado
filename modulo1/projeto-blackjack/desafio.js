/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    let querJogar = confirm (
      "Boas vindas ao jogo de Blackjack!" +
      "\n" +
      "Quer iniciar uma nova rodada?"
      )
    
    const carta = comprarCarta(); 
    const segundaCarta = comprarCarta()
    const somar = carta.valor + segundaCarta.valor    
    const cartasSao = carta.texto + segundaCarta.texto

    const cartaComputador = comprarCarta([]);
    const segundaCartaComputador = comprarCarta([])
    const somaComputador = cartaComputador.valor + segundaCartaComputador.valor
    const cartaEh = cartaComputador.texto

    while (somar < 21) {
       (confirm( 
      `Suas cartas são ${cartasSao} . A carta revelada do computador é ${cartaEh}.`+
      "\n" +
      "Deseja comprar mais uma carta?"))
      i++
   }
    