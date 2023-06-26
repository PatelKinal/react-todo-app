import TodoItem from "@/components/TodoItem";
import { useTodosContext } from "@/context/TodosContext";

const TodosList = () => {
  
  const value = useTodosContext();
  console.log(value);

  const { todos } = useTodosContext();
  
  return (
    <ul className="ui-container">
      {todos.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo} />
        ))
      }
    </ul>
  )
}

export default TodosList
