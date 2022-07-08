import { baseURL } from './baseURL';
import axios from 'axios';



const getSubscribers = async ():  Promise<any[]> => {
    const res = await axios.get(`${baseURL}/subscribers`);
    return res.data
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
