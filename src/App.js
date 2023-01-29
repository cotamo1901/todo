import React from "react"
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import './App.css'



const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso React', completed: false },
  { text: 'Llorar', completed: false },
]
function App(props) {
  return (
    <React.Fragment>
      <div className="container">

        <TodoCounter />
        <TodoSearch />


        <TodoList>
          {todos.map(todo => (<TodoItem key={todo.text} text={todo.text} />))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}

export default App;
