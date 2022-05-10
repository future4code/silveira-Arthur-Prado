import React from 'react'
import { goToPostPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const FeedPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>HELLOWorld!</h1>
            <button onClick={() => goToPostPage(navigate)}>Abrir Post</button>
        </div>
    )
}

export default FeedPage