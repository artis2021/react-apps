import { useState } from "react"
import '../Styles/Todo.css'
function Todo(){

    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function handleTitle(evt){
        setTitle(evt.target.value)
    }
    function handleDescription(evt){
        setDescription(evt.target.value)
    }
    function handleClick(evt){
        evt.preventDefault()
        const todo = {
            title,
            description
        }

        setTodos([...todos, todo])
    }

    return <div className="Todo center">
        <form className="form center">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={title} onChange={handleTitle}/>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" value={description} onChange={handleDescription}/>
            <button onClick={handleClick}>Add</button>
        </form>
        <div className="todos">
            {
                todos.map((todo, index) => {
                    return <div key={index} className="todo">
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                    </div>
                })
            }
        </div>
    </div>
}

export default Todo;