import { Request, Response } from "express";
import { connection } from "../data/connection";
import selectAllUsers from "../data/migrations";


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    
    try {
        const result = await connection("aula49_exercicio")
       const users = result.filter((userByName) => {
        return {
            id: userByName.id,
            name: req.query.name,
            email: userByName.email,
            type: userByName.type
        }
       })
       res.status(200).send(users)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

