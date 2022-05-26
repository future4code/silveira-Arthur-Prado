//4 - a)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//4 - b) Usaria essa string no package-json:  
// "start4": "tsc && node ./build/exercicio4",
// o tsc faz a transpilação e o node executa o arquivo em JavaScript

//4 - c) sim, ao criar o tsconfig.json a gente direciona para a pasta src e build.

//4 - d) Se está dentro da mesma pasta, só é necessário separar
// por espaços os nomes do arquivo no comando de npm run start:
//"start4": "tsc && node ./build/exercicio4"