1 - a)
CREATE TABLE - criar tabela.
VARCHAR - string de x caractéres
PRIMARY KEY - chave primária: identificador único
NOT NULL - não pode vir sem valor
DATE - representa data

b)
Mostram todas as databases e tables criadas no Schema

c) 
Mostra a query da tabela Actor já montada

2 - b)

Entrada duplicada para Primary Key, 
este erro aconteceu pois já existia um ID de mesmo valor, sendo que primary key deve ser única.

c)
Você tem um erro na sintaxe do SQL.
Esse erro acontece pois não passei como
parâmetro tudo que a tabela pede.

d) Campo de nome não tem um valor padrão.
Neste caso, era necessário passar o valor de nome para não ocorrer o erro.

e) Valor incorreto de data. 
Neste caso, o valor de data não está entre
aspas, fazendo com que tenha o valor errado.

3 - a)
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

b)
SELECT salary from Actor Where name = "Tony Ramos";

c) invalid é muito grande pro campo Gênero, pois foi setado para no máximo 6 caracteres.

d) SELECT id, name, salary from Actor WHERE salary <= 500000;

e) Coluna Nome desconhecida nos campos de lista. Deu erro pois colocamos como name os parâmetros, não nome.
SELECT id, name from Actor WHERE id = "002"

4 - a)
A Query está selecionando por nomes que começam com A ou J e usando o operador AND, para filtrar também pelos que tem salário acima de 300000. Escrito como AND, o operador tem a mesma função do &&.

b) SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000

c) SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%");

d) SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000

6 - a)
SELECT id, nome, avaliacao FROM Filmes WHERE id = "004";

b)SELECT * FROM Filmes WHERE nome = "O Auto da Compadecida";

c)SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;


7 - a)SELECT * FROM Filmes WHERE nome LIKE "%vida%";

b) SELECT * FROM Filmes WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%"

c) SELECT * FROM Filmes WHERE dataDeLancamento < "2022/06/06";

d) SELECT * FROM Filmes WHERE dataDeLancamento < "2022/06/06" AND (nome LIKE "%amor%" OR sinopse LIKE "%amor%") AND avaliacao > 7;