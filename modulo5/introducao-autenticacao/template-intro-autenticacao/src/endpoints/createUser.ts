import { Request, Response } from "express";
import { authenticationData, user } from "../types";
import { IdGenerator } from "../services/IdGenerator";
import { createUserData } from "../data/CreateUserData";
import Authenticator from "../services/Authenticator";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Invalid email");
       }

       if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid password");
       }

      const user = {
         email,
         password
      }
      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id:string = new IdGenerator().gerenateId()

      const newUser: user = {id, email, password}

      await createUserData(id, email, password)
      
      const payload: authenticationData = {
         id: newUser.id
      }


      const token = new Authenticator().generateToken(payload)

      res.status(201).send({ token })

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}