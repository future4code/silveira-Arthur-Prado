import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();
app.use(express.json());
app.use(cors());

// 1 -

app.post("/user", async (req: Request, res: Response) => {
  try {
    const newUser = {
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
    };
    await connection("TodoListUser").insert(newUser);
    res.status(200).send(`Usuário Cadastrado!`);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.params.id;
    const result = await connection("TodoListUser")
      .select("id", "nickname")
      .where({ id });
    if (result.length === 0) {
      errorCode = 418;
      throw new Error("Usuário não encontrado.");
    }
    res.status(200).send({ result });
  } catch (error: any) {
    res.status(errorCode).send({ error: error.message });
  }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.params.id;
    const body = {
      name: req.body.name,
      nickname: req.body.nickname,
    };
    if (
      body.name === null ||
      body.nickname === null ||
      body.name === undefined ||
      body.nickname === undefined
    ) {
      errorCode = 451;
      throw new Error("É necessário editar name e nickname.");
    }
    await connection("TodoListUser").update(body).where({ id: id });
    res.status(200).send("Usuário atualizado");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/task", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const newTask = {
      title: req.body.title,
      description: req.body.description,
      limit_date: req.body.limitDate.split("/").reverse().join("/"),
      creator_user_id: req.body.creatorUserId,
    };
    if (
      newTask.title === null ||
      newTask.description === null ||
      newTask.limit_date === null ||
      newTask.creator_user_id === null ||
      newTask.title === undefined ||
      newTask.description === undefined ||
      newTask.limit_date === undefined ||
      newTask.creator_user_id === undefined
    ) {
      errorCode = 422;
      throw new Error("Alguma propriedade não foi passada no body");
    }
    await connection("TodoListTask").insert(newTask);
    res.status(200).send("Tarefa adicionada.");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/task/:id", async (req: Request, res: Response) => {
   let errorCode = 400
  try {
    const id = req.params.id;
    const result = await connection("TodoListTask")
      .select(
        "id",
        "title",
        "description",
        "status",
        "limit_date",
        "creator_user_id",
        "nickname"
      )
      .where({ id });
      res.status(200).send(result)
  } catch (error) {
      errorCode = 422
      res.status(errorCode).send("Tarefa não encontrada.")
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
