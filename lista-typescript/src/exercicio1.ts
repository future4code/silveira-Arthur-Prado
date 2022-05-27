const birthDay = () => {
  const name: string = "Arthur";
  const date: string = "04/05/1995";
  const dateOne = date.split("/")
  const frase: string = 
  `Olá me chamo ${name}, nasci no dia ${dateOne[0]} do mês de ${dateOne[1]} do ano de ${dateOne[2]}`;
  console.log(frase);
};
birthDay()