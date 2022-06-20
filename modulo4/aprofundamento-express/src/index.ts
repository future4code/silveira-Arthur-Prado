import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// Exercício 1 - 

app.get("/ping", (request: Request, response: Response) => {
    response.status(200).send("Pong!")
})

// Exercício 2 - 
type ToDos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

// Exercício 3 - 
const afazeres:ToDos[] = [
    {
        userId: 1,
        id: 1,
        title: "comer",
        completed: true,
    },
    {
        userId: 2,
        id: 2,
        title: "passear com o cão",
        completed: false,
    },

    {
        userId: 3,
        id: 5,
        title: "dormir",
        completed: true,
    },
]

// Exercício 4 - 
app.get("/afazer/:status", (request:Request, response:Response) => {
    let status:string | boolean = request.params.status 
    
    const mapeiaAfazeres = afazeres.filter((tarefa) => {
        if (status === "true") {
            status = true
            return tarefa.completed === status
            } 
            else if (status === "false") {
            status = false
            return tarefa.completed === status
            }
    })
    response.status(200).send(mapeiaAfazeres)
})

// Exercício 5 - 
app.post("/create-afazer", (request:Request, response:Response) => {
    const novaTarefa = {
        userId: Date.now(),
        id: request.body.id,
        title: request.body.title,
        completed: request.body.completed,
    }
    afazeres.push(novaTarefa)
    response.status(200).send(afazeres)
})

// Exercício 6 - 
