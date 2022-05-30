

const listaDeTarefas = [
    "Lavar a louça",
    "Fazer almoço",
]

const adicionaTarefa = process.argv[2]


listaDeTarefas.push(adicionaTarefa)

console.log(listaDeTarefas)

