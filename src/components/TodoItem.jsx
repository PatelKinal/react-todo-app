import styles from '@/styles/TodoItem.module.css';
import { useRef, useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useTodosContext } from '@/context/TodosContext';


const TodoItem = ({ itemProp }) => {
    
    const { delTodo, setUpdate, handleChange } = useTodosContext();
    const [editing, setEditing] = useState(false);
    const editInputRef = useRef(null);

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    };

    const handleEditing = () => {
        setEditing(true);
    };

    let viewMode = {};
    let editMode = {};

    if(editing) {
        viewMode.display = 'none';
    }
    else {
        editMode.display = 'none';
    }

    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
            setUpdate(editInputRef.current.value, itemProp.id);
            setEditing(false);
        }
    };
  
    return (
     <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
      <input 
        type="checkbox"
        checked= {itemProp.completed}
        onChange={() => handleChange(itemProp.id)} 
      />
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
        <button onClick={handleEditing}>
            <AiFillEdit style={{ color: "#5e5e5e", fontSize: "18px" }} />
        </button>
      <button onClick={() => delTodo(itemProp.id)}>
          <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
      </button>
      </div>
      <input 
      style={editMode}
        type="text" 
       // value={itemProp.title}
        className={styles.textInput}
     //   onChange = {(e) => setUpdate(e.target.value, itemProp.id) }
        onKeyDown={handleUpdatedDone}
        ref = {editInputRef}
        defaultValue = {itemProp.title}
        />
    </li>
  );
};

export default TodoItem
