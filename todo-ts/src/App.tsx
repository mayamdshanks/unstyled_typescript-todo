import { useState } from "react";
import "./App.css";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import Todo from "./Model/model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };
  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos item={todos} />
    </>
  );
}

export default App;
