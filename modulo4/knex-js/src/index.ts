import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import  connection  from './connection';

const app: Express = express();
app.use(express.json());
app.use(cors());




//Exercício 1 - a )
/* A resposta nesse caso seria o ator do id em questão */

// 1 - b )
app.get("/actor", async (req: Request, res: Response) => {
        try {
            const resultado = await connection.raw(`
            SELECT * FROM Actor WHERE name = '${req.body.name}'
          `)
          res.status(200).send({message: resultado[0]})
        } catch (error:any) {
            console.log({message: error.message})
        }
    }
)

// 1 - c )
app.get("/gender", async (req: Request, res: Response) => {
    try {
        const resultado = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender = '${req.body.gender}'
        `)
        res.status(200).send(resultado[0])
        
    } catch (error:any) {
        console.log({message: error.message})
    }
})

// 2 - a ) 
app.put("/atualiza",(req: Request, res: Response) => {
        try {
          const updateActor = async (id: string, salary: number): Promise<any> => {
          await connection("Actor")
            .update({
                salary: salary,
            })
            .where("id", id)
            res.status(200).send(updateActor)
        }
        } catch (error:any) {
            console.log({message: error.message})
        }
})
    




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});