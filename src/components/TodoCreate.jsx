import { useState } from "react";

const TodoCreate = ({createTodo}) => { 

const [title, setTitle] = useState('');
const handleSubmitAddTodo = (e) => {
  e.preventDefault();
 
 
  if (!title.trim()) {
    return setTitle("");
  }
  createTodo(title);
  setTitle("");
};
    return (

      <form onSubmit={handleSubmitAddTodo} className="overflow-hidden 
        bg-white rounded-md py-4 flex gap-4 items-center px-4 mt-8">
        <span className="rounded-full border-2 w-6 h-6 inline-block "></span>
        <input
          type="text" 
          placeholder="Create a new todo..."
          className="w-full text-gray-500 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    );

    };

export default TodoCreate;

