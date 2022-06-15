import { Address } from "../types";
import { connection } from "./connection";

export default async function insertAddressDb (address:Address)  {

    const { logradouro, bairro, cidade, estado } = address

    await connection("address")
    .insert(
        logradouro,
        bairro,
        cidade,
        estado
    )
} 

