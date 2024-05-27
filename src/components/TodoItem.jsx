import CheckIcon from "./iconos/CheckIcon";
import CrossIcon from "./iconos/CrossIcon";

const TodoItem = ({todo, removeTodo, updateTodo}) => {
    const { id, title, completed } = todo;
     return (
        <article className=" flex gap-4 py-4 border-b-gray-500 border-b" >
         <button
           className={`h-6 w-6 flex-none rounded-full border-2
        
           ${completed ? "flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500    " : "  inline-block "}`}
           onClick={() => updateTodo(id)}
         >
          
           {
             completed && <CheckIcon />
           }
        
         </button>
            <p className={`text-gray-600 grow ${completed && "line-through"}`}>
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
              <CrossIcon />
            </button>
          </article>
     ); };

     export default TodoItem;