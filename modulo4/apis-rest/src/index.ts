import express, { Request, Response } from "express";
import cors from "cors";
import { request } from "http";
import { type } from "os";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

// Exercício 1 -

enum UserEnum {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

type user = {
  id: number;
  name: string;
  email: string;
  type: UserEnum;
  age: number;
};

let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserEnum.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserEnum.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserEnum.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserEnum.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserEnum.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserEnum.ADMIN,
    age: 60,
  },
];

app.get("/users", (req: Request, res: Response) => {
  const getUsers = users.map((user) => {
    return user;
  });
  res.status(200).send(getUsers);
});

// a) Método Get.
// b) A entidade User

// Exercício 2 -

app.get("/users/type", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    let type = req.query.type as string;
    let search = req.query.name as string;
    if (type) {
      type = type.toUpperCase();
      if (type in UserEnum) {
        const returnType: any = users.filter((user) => {
          return user.type === type;
        });
        res.status(200).send(returnType);
      }
      errorCode = 404;
      throw new Error("Type not founded.");
    }

    if (search) {
      search = search.toUpperCase();
      const searchName = users.filter((user) => {
        return user.name.toUpperCase().includes(search);
      });
      if (searchName.length === 0) {
        errorCode = 404;
        throw new Error("Name not founded");
      }
      res.status(200).send(searchName);
    }

    return res.status(200).send(users);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

// a) por Query Params, para poder acessar algum dos tipos.
// b) utilizando o "Throw new Error", onde será avisado que o tipo passado não foi encontrado.

// Exercício 3 - a) Query Params.

// Exercício 4 -
app.get("/adiciona-users", (req: Request, res: Response) => {
  try {
    const newUser = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age,
    };

    users.push(newUser);
    res.status(200).send(users);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

// a) Não muda nada, só não é convencional.
// b) Não, pois o método put é utilizado convencionalmente para Editar.