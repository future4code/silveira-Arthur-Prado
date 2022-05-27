type Dados = {
    cliente: string,
    saldoTotal: number,
    debitos: number[],
}

const arrayDeCliente: Dados[] = 
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

// const atualizaSaldo = (array: Dados[])=> {
//     const mapeiaPessoa = array.map((pessoa) => {
//         return [pessoa.debitos]

//     }).reduce((valorInicial:number, valorSomado:number): number[]=> {
//       return valorInicial + valorSomado
//     })
//     return mapeiaPessoa
// }
// console.log(atualizaSaldo(arrayDeCliente))
