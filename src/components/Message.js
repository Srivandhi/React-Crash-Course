import { useState } from "react"

export const Message = () => {
    const [message, setMessage] = useState("Welcome visitor")   /* It is a state,This function will return two values||setMessage is used to update Message variable */
    return (
        <div>
            <h1>{message}</h1>
            <button onClick = {()=>setMessage("Text is changed via onClick")}>Change Text</button>
        </div>
    )
}