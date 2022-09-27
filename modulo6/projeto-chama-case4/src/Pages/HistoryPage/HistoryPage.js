import React from "react"

const HistoryPage = () => {
    const {history} = localStorage
    const parsedHistory = JSON.parse(history) 
    return(
        <div>
            {parsedHistory ? parsedHistory.sort((a, b) => b.timeStamp - a.timeStamp).map(({userName, timeStamp}) => {
                return(
                    <div key={userName}>
                        {userName}
                        {new Date(timeStamp).toLocaleString()}
                    </div>
                )
            }): "Nenhum histórico salvo."}
        </div>
    )
}

export default HistoryPage

