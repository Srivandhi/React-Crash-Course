import { useState } from "react"


export const Form = ()=>{
    const [username,setUsername] = useState('');
    const [text,setText] = useState('');
    const handleSubmit = (event)=>{              /* this fn automatically receives the submit event as an argument */
        event.preventDefault(); ///inorder to prevent the default submission of form
        alert(`form data is ${username}`)
    }
    const handleSelect = (event)=>{
        alert(`country = ${country}`)
    }
    const [country,setCountry] =useState('');

        return <form onSubmit={handleSubmit}>
            <div>
                <label>username</label>
                <input  type="text" value = {username} onChange={(event)=>setUsername(event.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
            <div>
                <textarea value = {text} onChange={(event)=>setText(event.target.value)}></textarea>
                <select onSubmit={handleSelect()} value={country} onClick={(event)=>setCountry(event.target.value)}>
                    <option>india</option>
                    <option>pakistan</option>
                    <option>Japan</option>
                </select>
            </div>
        </form>
}