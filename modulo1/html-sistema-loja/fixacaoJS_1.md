  ˋˋˋfunction calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioFixo = 2000
  let comissaoPorCarro = qtdeCarrosVendidos * 100
  let comissaoPorcentagem = valorTotalVendas/20 
  const salarioFinal = comissaoPorCarro + comissaoPorcentagem + salarioFixo
  return salarioFinal
}ˋˋˋ
  