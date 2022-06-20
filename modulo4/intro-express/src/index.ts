import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// Exercício 1 - 

app.get('/primeiro',(request:Request, response:Response) => {
    response.status(200).send("Criei meu primeiro endpointttt!")
})

// Exercício 2 - 

type Usuario = {
        id: number,
        name: string,
        phone: number,
        email: string,
        website: string,
    }


// Exercício 3 -
const arrayDeUsuarios:Usuario[] = [
     {
     id: 1,
     name: "Arthur",
     phone: 952837049,
     email: "arthur@labenu.com",
     website: "qualquercoisa.com"
    },
    {
     id: 2,
     name: "Rodrigo",
     phone: 928940443,
     email: "rodrigo@labenu.com",
     website: "variascoisa.com"
    },
    {
     id: 3,
     name: "João",
     phone: 983983974,
     email: "joao@labenu.com",
     website: "umascoisa.com"
    }
]
 
// Exercício 4 - 

app.get('/users',(request:Request, response:Response) => {
    const mandaUsuarios = arrayDeUsuarios.map((usuario) => {
        return usuario
    })
    response.status(200).send(mandaUsuarios)
    console.log(mandaUsuarios)
   
})

// Exercício 5 - 

type Posts = 
    {
        id: number,
        title: string,
        body: string,
        userId: number,
    }


// Exercício 6 - R: Acredito que fora do array de usuários, pois estou
//fazendo outra tipagem e utilizando outras propriedades.

const arrayDePosts:Posts[] = [
    {
        id: 1,
        title: "aaa",
        body: "bbb",
        userId: 1,
    },
    {
        id: 2,
        title: "ccc",
        body: "ddd",
        userId: 2,
    },
    {
        id: 3,
        title: "eee",
        body: "fff",
        userId: 3
    }
]

// Exercício 7 - 

app.post('/posts', (request:Request, response:Response) => {
    const mandaPosts = arrayDePosts.map((post) => {
        return post
    })
    response.status(200).send(mandaPosts)
    console.log(mandaPosts)
})

// Exercício 8 - 

app.get('/posts/:id', (request:Request, response:Response) => {
    const id:any = request.params
    const postPorId = arrayDePosts.find((post) => {
        if (id === post.id){
            return post
        }
    })
    response.status(200).send(postPorId)
    console.log(postPorId)
})
