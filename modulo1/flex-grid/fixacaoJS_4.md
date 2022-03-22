``` function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let quantasVezes = 0
for (let i = 0; i < arrayDeNumeros.length; i++) { 
  if (numeroEscolhido === arrayDeNumeros[i]) {
    quantasVezes = quantasVezes + 1
  }
} 
if (quantasVezes === 0) {
  return 'Número não encontrado'
}
return `O número ${numeroEscolhido} aparece ${quantasVezes}x`
}