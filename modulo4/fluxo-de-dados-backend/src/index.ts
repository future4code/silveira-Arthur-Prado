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
  const novoProduto = {
    id: Date.now().toString(),
    name: request.body.name,
    price: request.body.price,
  };
  arrayDeProdutos.push(novoProduto);
  response.status(200).send(arrayDeProdutos);
});

// Exercício 4 -
app.get("/produtos", (request: Request, response: Response) => {
  response.status(200).send(arrayDeProdutos);
});

// Exercício 5 -
app.put("/produtos/:id", (request: Request, response: Response) => {
  const id = Number(request.params.id);
  const produtoEditado = {
      id: id,
      name: request.body.name,
      price: request.body.price
  }
  const editaPreco = arrayDeProdutos.map((produto) => {
    if (produto.name === request.body.name){
    return (produtoEditado)
}
    if (produto.name !== request.body.name) {
        return (produto)
    } 
  });
 
  response.status(201).send(editaPreco);

  })

// Exercício 6 -

app.delete("/delete/:id", (request: Request, response: Response) => {
    const id = (request.params.id)
        const deletaProduto = arrayDeProdutos.map((produto) => {
            if(id === produto.id) {
               return arrayDeProdutos.splice(0, 1)
                
            }
        })
        response.status(200).send(deletaProduto) 

})


app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
