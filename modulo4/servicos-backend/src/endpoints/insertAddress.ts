import getFullAddress from "../services/getFullAddress"
import { Request, Response } from "express";
import insertAddressDb from "../data/insertAddressDb";


const insertAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        const address = await getFullAddress(cep)
       if(!address) {
        throw new Error("Cep inválido.")
       }
        await insertAddressDb(address)
        res.status(200).send("Endereço criado com sucesso.")
        
    } catch (error) {
        res.status(500).send("Deu ruim")
    }
}

export default insertAddress