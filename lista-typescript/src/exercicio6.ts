type Dados = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const arrayDeCliente: Dados[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

const atualizaSaldo = (array: Dados[]) => {
  const mapeiaDebitos = array.map((pessoa) => {
	const retornaDebitos = pessoa.debitos
    return retornaDebitos;
  });
    const somaDebitos: number[] = mapeiaDebitos.reduce((a, b:any) => {
    return a + b
  });
  return somaDebitos
};  

console.log(atualizaSaldo(arrayDeCliente));
