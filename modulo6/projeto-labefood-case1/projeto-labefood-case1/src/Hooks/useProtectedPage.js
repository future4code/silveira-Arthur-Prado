import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../Routes/Coordinator"


const useProtectedPage = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    useEffect(() => {
        if(!token || token === undefined) {
            goToLoginPage(navigate)
        }
    })
}

export default useProtectedPage