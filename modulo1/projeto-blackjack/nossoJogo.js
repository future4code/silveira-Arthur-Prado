/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); 
    // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // 
    imprime o texto da carta. Exemplo: "K♦️" 
    (indica "K" de ouros)
    console.log(carta.valor) // 
    imprime o valor da carta (um número). 
    Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!");
let querJogar = (confirm ("Quer iniciar uma nova rodada?"))
 

if (querJogar) {
const carta = comprarCarta(); 
const segundaCarta = comprarCarta()
const somar = carta.valor + segundaCarta.valor
console.log(`Usuário - cartas: ${carta.texto} ${segundaCarta.texto} Pontuação ${somar}`) 

const cartaComputador = comprarCarta();
const segundaCartaComputador = comprarCarta()
const somaComputador = cartaComputador.valor + segundaCartaComputador.valor
console.log(`Computador - cartas: ${cartaComputador.texto} ${segundaCartaComputador.texto} Pontuação ${somaComputador}`)

if (somar > somaComputador){
   console.log(`O usuário ganhou!`)
} else if (somar < somaComputador){
   console.log(`O computador ganhou!`)
} else {
   console.log(`Empate!`)
}
}else {
   console.log("O jogo acabou")
}










