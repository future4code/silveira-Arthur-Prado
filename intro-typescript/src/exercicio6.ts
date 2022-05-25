const operacoes = (num1: number, num2: number): void => {
  const soma = num1 + num2
  console.log(soma)

  const subtrai = num1 - num2
  console.log(subtrai);

  const multiplica = num1 * num2
  console.log(multiplica);

  const divide = num1 / num2
  console.log(divide);
};

console.log(operacoes(10, 20));
