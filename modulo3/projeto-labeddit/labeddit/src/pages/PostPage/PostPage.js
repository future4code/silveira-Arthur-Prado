import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/coordinator'

const PostPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Hello World!</h1>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default PostPage