import { baseURL } from "./baseURL";
import axios from "axios";
import express, {Express, Request, Response} from 'express'


// a )
// Essa função é assíncrona e utiliza o método put.


// const postNews = async (req: Request, res: Response) => {
//     const news = { 
//         title: req.body.title,
//         content: req.body.content,
//         date: Date.now(),
//     }
    
//  return axios.put(`${baseURL}/news`, news)
// }

const createNews = async (req: Request, res: Response): Promise<void> => {
    try {
       const resultado = await axios.put(`${baseURL}/news`, {
            title: req.body.title,
            content: req.body.content, 
            date: Date.now()
          });
          res.status(200).send(`${resultado} deu certo`)
        
    } catch (error:any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
    
  }
    

// Exercício errado
