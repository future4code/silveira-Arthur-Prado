import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getPerfil(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        
        if(!token) {
            res.status(422).send("Esse endpoint exige uma autorização.")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if(tokenData.role !== "ADMIN") {
            res.status(401).send("Somente administradores podem acessar essa funcionalidade.")
        }

        const userDatabase = new UserDatabase();
        const users = await userDatabase.getPerfil()
        
        res.status(200).send(users)

    } catch (error:any) {
        res.status(400).send(error.message)
    }
}