import express, { Request, Response } from "express";
import cors from "cors";
import { arrayDeProdutos } from "./data";
const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1 -
app.get("/test", (request: Request, response: Response) => {
  response.status(200).send("A API está funcionando");
});

// Exercício 3 -
app.post("/novoProduto", (request: Request, response: Response) => {
  try {
    const { name, price } = request.body;
    

    if (!name || !price) {
      response.statusCode = 422
      throw new Error("Nome e preço do produto tem que ser declarados");
    }

    if (typeof name !== "string" || typeof price !== "number") {
      response.statusCode = 422
      throw new Error(
        "Nome e preço devem ser string e numero, respectivamente"
      );
    }

    if (price <= 0) {
      response.statusCode = 422
      throw new Error("Preço deve ser maior que zero");
    }

    const novoProduto = {
      id: Date.now().toString(),
      name,
      price,
    };

    arrayDeProdutos.push(novoProduto);
    response.status(201).send(arrayDeProdutos);
  } catch (error: any) {
    if (response.statusCode === 200) {
      response.status(500).end();
    } else {
      response.status(422).send(error.message);
    }
  }
});

// Exercício 4 -
app.get("/produtos", (request: Request, response: Response) => {
  response.status(200).send(arrayDeProdutos);
});

// Exercício 5 -
app.put("/produtos/:id", (request: Request, response: Response) => {
try {
  const id = request.params.id;
  const { price, name } = request.body

  if (!price || typeof price !== "number" || price <= 0) {
    response.statusCode = 422
    throw new Error("Preço do produto tem que ser declarado, deve ser um numero e deve ser maior que 0")
  }

  const produtoEditado = {
    id: id,
    name: request.body.name,
    price: request.body.price,
  };
  const editaPreco = arrayDeProdutos.map((produto) => {
    if (produto.id === id) {
      return produtoEditado;
    } else {
      return produto;
    }
  });

  response.status(201).send(editaPreco);
}catch(error: any) {
  if (response.statusCode === 200) {
    response.status(500).end()
} else {
    response.send(error.message)
}
}
});

// Exercício 6 -

app.delete("/delete/:id", (request: Request, response: Response) => {
  try {
  const id = request.params.id;

  

  let i = arrayDeProdutos.findIndex((produto) => {
    return produto.id === id;
  });

  if (i < 0) {
    response.statusCode = 404
    throw new Error("Produto não encontrado")
  }

  arrayDeProdutos.splice(i, 1);

  response.status(200).send(arrayDeProdutos);
}catch(error: any) {
  response.status(404).send(error.message)
}
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
