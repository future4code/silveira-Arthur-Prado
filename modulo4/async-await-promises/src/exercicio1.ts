import { baseURL } from './baseURL';
import axios from 'axios';

// 1 - a )
// Endpoint Get.

// 1 - b )
// Promise<any[]>

// 1 - c ) 
async function getSubscribers(): Promise<any[]> {
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

