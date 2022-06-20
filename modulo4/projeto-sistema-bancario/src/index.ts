import express, {Request, Response} from "express";
import cors from "cors";
import { arrayUsuarios, User, Transations } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});



app.get('/users',(req: Request, res: Response) => {
 try{
   const getUsers = arrayUsuarios.map((user) => {
    return user
   })
   res.status(201).send(getUsers)
}catch(error:any) {
   res.status(400).send({message: error.message})
}
})

app.post('/users', (req: Request, res: Response) => {
    let errorCode = 400
    const dataAtual = new Date()
    dataAtual.setFullYear(dataAtual.getFullYear() - 18)
    let idade = new Date(req.body.birthday) 
    
    try {
    const newUser:User = {
        name: req.body.name,
        cpf: req.body.cpf,
        birthday: req.body.birthday,
        transations:[
            {
              value: 0,
              description: "",
              paymentDate: "",
            }
        ]
    }
    if(dataAtual.getTime() > idade.getTime()) {
    arrayUsuarios.push(newUser)
} else {
    errorCode = 422
    throw new Error ("User under 18 is forbbiden")
}
 res.status(200).send("User signed up")
}catch(error:any) {
    res.status(400).send({message: error.message})
}
})