import axios from "axios"
import { useEffect, useState } from "react"


const useRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)

    const getData = async() => {
        await axios.get(url, {headers:{
            auth: window.localStorage.getItem('token')
        }})
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error.response.data.message)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return[data]
}

export default useRequestData