Exercício 1 - a)
Apagaria a coluna salary da tabela actor.

b) Mudaria o nome da coluna de gender para sex.

c) Aumentaria a quantidade de caracteres possíveis de ser colocados na coluna gender.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR (100);

2 - a )
UPDATE Actor
SET 
name = "Tarcísio Meira",
birth_date = "1954/10/10"
WHERE id = "003";

b ) 
UPDATE Actor 
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes" 
WHERE name = "JULIANA PAES";

c ) 
UPDATE Actor
SET 
name = "Fiuk", 
salary = 1000,
birth_date = "1990/09/20",
gender = "male"
WHERE id = "005";

d) O SQL aceita a alteração, mas na tabela nada muda de verdade.

3 - a ) 
DELETE FROM Actor WHERE name = "Antônio Fagundes";

b ) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

4 - a )
SELECT MAX(salary) FROM Actor;

b ) 
SELECT MIN(salary) FROM Actor WHERE gender = "female";

c )
SELECT COUNT(*) FROM Actor WHERE gender = "female";

d ) 
SELECT SUM(salary) FROM Actor;

5 - a )
Ele faz a soma por gênero, passando o resultado da quantidade total de mulheres, depois de homens.

b ) 
SELECT id, name FROM Actor
ORDER BY name DESC;

c ) 
SELECT * FROM Actor
ORDER BY salary;

d ) 
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e ) 
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;


6 - a ) 
ALTER TABLE Filmes ADD playing_limit_date DATE;

b )
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;

c ) 
UPDATE Filmes 
SET playing_limit_date = "2021-09-22"
WHERE id = "003";

UPDATE Filmes
SET playing_limit_date = "2022-08-10"
WHERE id = "001";

d )
3 linhas retornadas.
Essa resposta vem pois quando não há nada para atualizar, o comando de update retorna a tabela completa.