import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();
app.use(express.json());
app.use(cors());

//Exercício 1 - a )
/* A resposta nesse caso seria o ator do id em questão */
app.get("/show-actors", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("Actor");
    res.status(200).send({ message: resultado });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

// 1 - b )
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const resultado = await connection.raw(`
            SELECT * FROM Actor WHERE name = '${req.body.name}'
          `);
    res.status(200).send({ message: resultado[0] });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

// 1 - c )
app.get("/gender", async (req: Request, res: Response) => {
  try {
    const resultado = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender = '${req.body.gender}'
        `);
    res.status(200).send(resultado[0]);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

// 2 - a )
app.put("/atualiza/:id", async (req: Request, res: Response) => {
  try {
    await connection("Actor")
      .update({
        salary: req.body.salary,
      })
      .where({ id: req.params.id });
    res.status(200).send({ id: req.params.id, salary: req.body.salary });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.delete("actor/:id", async (req: Request, res: Response) => {
  try {
    await connection("Actor").where( {id: req.params.id} ).delete();
    res.status(200).send("Ator deletado.");
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
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
