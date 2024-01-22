import { useState } from "react"
import '../Styles/Form.css'
function Form() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [admin, setAdmin] = useState(false)
    const [age, setAge] = useState('teenager')
    function handleName(evt) {
        setName(evt.target.value)
        
    }
    function handleUserName(evt) {
        setUsername(evt.target.value)
    }
    function handleEmail(evt) {
        setEmail(evt.target.value)
    }
    function handlePassword(evt) {
        setPassword(evt.target.value)
    }
    function handleAdmin(evt) {
        setAdmin(evt.target.checked)
    }
    function handleAge(evt) {
        setAge(evt.target.value)
    }
    function handleSubmit(evt){
        evt.preventDefault();
        // Show al the values you have
        const object = {
            // keys and value
            name,
            username,
            email,
            password,
            admin,
            age 
        }
        console.log("I am sending this data to backend, data = ", object)
    }
    return <div className="Form">
        <h1>Register Form</h1>
        <form className="form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Type here..." onChange={handleName} value={name} />
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" placeholder="Type here..." onChange={handleUserName} value={username} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Type here..." onChange={handleEmail} value={email} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Type here..." onChange={handlePassword} value={password}/>
            <div className="admin-container">
            <label htmlFor="admin">Isadmin</label>
            <input type="checkbox" id="admin" onChange={handleAdmin} checked={admin}/>
            </div>
            <label htmlFor="age">Age-Group</label>
            <select id="age" onChange={handleAge} value={age}>
                <option value="junior"> {"<"} 10</option>
                <option value="teenager"> {">="} 10 and &lt; 18</option>
                <option value="youngster"> {">="} 18 and &lt; 24</option>
                <option value="adult"> {">="} 24</option>
            </select>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>

    </div>
}

export default Form