import { connection } from "./connection";
// export default async function selectAllUsers():Promise<any> {
//     const result = await connection.raw(`
//        SELECT id, name, email, type
//        FROM aula49_exercicio;
//     `)
 
//     return result[0]
//  }

 const selectAllUsers = async (userByName:string):Promise<any> => {
    
    await connection("aula49_exercicio")
    .select(userByName)
 }
 export default selectAllUsers
