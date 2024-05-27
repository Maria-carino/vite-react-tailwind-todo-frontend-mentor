import { useState } from "react";
import TodoComputed from "./TodoComputed";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos =[
  { id: 1, title: "Complete online JavaScript course", completed: true },
  { id: 2, title: "Jog around the park 3x", completed: false },
  { id: 3, title: "10 minutes meditation", completed: false },
  { id: 4, title: "Read for 1 hour", completed: false },
  { id: 5, title: "Pick up groceries", completed: false },
  { id: 6, title: "Complete Todo App on Frontend Mnetor", completed: false },
];

const App = () => {

  const [todos, setTodos] = useState (initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  
  };

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ?
      { ...todo, completed: !todo.completed} : todo ));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };
  return(
  <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
      <Header /> 
      {/*Aqui van las tareas registradas*/}
      <main className="container mx-auto px-4 mt-6">
        <TodoCreate createTodo={createTodo} />
        <TodoList todos={todos} removeTodo={removeTodo}
          updateTodo={updateTodo} />
        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />
      </main>
  
      <TodoFilter changeFilter={changeFilter} />

      <footer className="text-center mt-8 text-gray-400">
        Drag and drop to reorder list
      </footer>
  </div>
  );
};

export default App;