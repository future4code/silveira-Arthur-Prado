// 2 -
const valorTerminal = Number(process.argv[3])
const segundoValorTerminal = Number(process.argv[4])
 
const operacao = process.argv[2]

switch(operacao) {
    case "soma":
       console.log("Resposta:", valorTerminal + segundoValorTerminal)
       break;
    case "sub":
       console.log("Resposta:", valorTerminal - segundoValorTerminal)
       break;
    case "mult":    
        console.log("Resposta:", valorTerminal * segundoValorTerminal)
        break;
    case "div":
        console.log("Resposta:", valorTerminal / segundoValorTerminal)
        break;
    default:
        console.log("deu errado")
        break;
}
