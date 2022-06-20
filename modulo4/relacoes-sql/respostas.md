Exercício 1

a) O Foreign Key, chave estrangeira, atribui uma key a nova tabela com base em uma KEY já existente de outra tabela.

b) INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
    "001",
    "Médio",
    4.5,
    "001"
),
(
    "003",
    "Bom!",
    7.5,
    "003"
),
(
    "004",
    "Maravilhoso. Obra prima!",
    10,
    "004"
);

c) Não é possível adicionar a linha de código pois o INSERT está esperando uma Foreign Key de uma Key inexsitente pois o ID não existe na tabela de movie.

d) ALTER TABLE Movie DROP COLUMN rating;

e) Cannot delete or update a parent row: a foreign key constraint fails (shaw-21814907-perera.Rating, CONSTRAINT Rating_ibfk_1 FOREIGN KEY (movie_id) REFERENCES Movie (id))

Não é possível apagar pois essa tabela está fornecendo uma KEY para outra tabela. Para que a operação possa ser feita, teríamos que apagar a tabela Rating primeiro, que "consome" a KEY da tabela Movie.
Exercício 2

a) É uma tabela feita para receber e dar dados (uma tabela intermediária). Onde é criado um id para o filme e para o ator, sendo eles puxados como Foreign key das respectivas tabelas onde eles estão.

b) INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
    "001",
    "004"
),
(
    "002",
    "003"
),
(
    "004",
    "006"
);

c) Não é possível criar pelo mesmo motivo anterior de que não existe um id para "consumir" e criar algo que já tenha das outras tabelas. Impossibilitando de criar uma Foreign Key.

d) Como no anterior também não é possível apagar alguém dessa tabela pois ela fornece uma KEY a outras tabela. Teriamos que deletar a ultima tabela hierarquica para que pudessemos apaga-lá.
Exercício 3

a) O operador ON faz com que selecionamos da onde queremos pegar a informação correta. INNER JOIN Rating ON Movie.id = Rating.movie_id, seria de dar JOIN "onde" o Movie.id fosse igual o Rating.movie_id

b) SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
