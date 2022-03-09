``` function calculaPrecoTotal(quantidade) {
  let precoMaca 
  if (quantidade >= 12) {
    precoMaca = 1
  } if (quantidade < 12) {
    precoMaca = 1.30
  }
  const precoTotal = precoMaca * quantidade
  return precoTotal
} ```