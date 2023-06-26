import { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"
import { IconContext } from "react-icons"
import { useTodosContext } from "@/context/TodosContext"

const InputTodo = () => {

    const { addTodoItem } = useTodosContext();
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTodoItem(title);
            setTitle('');
            setMessage('');
        }
        else {
            setMessage('Please add item..');
        }
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

  return (
    <>
    <form onSubmit={handleSubmit} className="form-container">
        <input 
        className="input-text"
        type="text" 
        placeholder="Add Todos.."
        value={title}
        onChange={handleChange}
        />
       <IconContext.Provider
            value={{
                color: "darkcyan",
                style: { fontSize: "20px", color: "#ff0000" },
                className: "submit-iconn",
            }}
        >
        <button className="input-submit">
            <FaPlusCircle />
            <FaPlusCircle />
            <FaPlusCircle />
        </button>
        </IconContext.Provider>
    </form>
    <span className="submit-warning">{message}</span>
    </>
  )
}

export default InputTodo
