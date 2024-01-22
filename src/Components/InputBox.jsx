import { useState } from "react"
import '../Styles/InputBox.css'

function InputBox(){
    const [val, setval] = useState('');

    function handleChange(evt){
        const currValue = evt.target.value 
        setval(currValue)
    }

    return <div className="InputBox">
        <input type="text" onChange={handleChange} />
        <h1>You have typed the value <span>{val}</span></h1>
    </div>
}

export default InputBox