import { baseURL } from './baseURL';
import axios from 'axios';

type User = {
	id: string;
	name: string;
	email: string;
}

// c )
const getSubscribers = async ():  Promise<User[]> => {
    const res = await axios.get(`${baseURL}/subscribers`);
    return res.data.map((sub:any) => {
        return ({
            id: sub.id,
            name: sub.name,
            email: sub.email,
        })
    })
}


const main = async () => {
    try {
        const response = await getSubscribers()
        console.log(response)
    } catch (error:any) {
        console.log(error.response?.data || error.message)
    }
}

main()

// a )
// Funcionará normalmente.

// b ) 
// Pois queremos retornar a parte que nos interessa dessa Promise

