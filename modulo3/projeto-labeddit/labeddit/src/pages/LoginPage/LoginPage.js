import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToFeedPage, goToSignUpPage } from '../../routes/coordinator'

const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Hello World!</h1>
            <button onClick={() => goToFeedPage(navigate)}>Continuar</button>
            <button onClick={() => goToSignUpPage(navigate)}>Crie uma conta</button>
        </div>
    )
}

export default LoginPage