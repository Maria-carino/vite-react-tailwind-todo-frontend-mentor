
import CrossIcon from "./components/iconos/CrossIcon";
import MoonIcon from "./components/iconos/MoonIcon";

const App = () => {
  return(
  <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
    <header className="container mx-auto px-4 mt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white  ">todo</h1>
        <button>
          <MoonIcon />
        </button>
        </div>
      
      <form className="overflow-hidden bg-white rounded-md py-4 flex gap-4 items-center px-4 mt-10">
        <span className="rounded-full border-2 w-6 h-6 inline-block "></span>
        <input
          type="text" 
          placeholder="Create a new todo..."
          className="w-full text-gray-500 outline-none"
        />
      </form>
      </header>
      
      {/*Aqui van las tareas registradas*/}
      <main className="container mx-auto px-4 mt-6">
        {/*cada article es una tarea con su boton de circulo y la x */}
        <div  className="bg-white rounded-md [&>article]:px-4">
          <article className=" flex gap-4 py-4 border-b-gray-500 border-b" >
            <button className="rounded-full border-2 w-6 h-6 inline-block flex-none "></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className=" flex gap-4 border-b-gray-500 border-b py-4">
            <button className="rounded-full border-2 w-6 h-6 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Jog around the park 3x</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-gray-500 border-b  py-4">
            <button className="rounded-full border-2 w-6 h-6 inline- flex-none"></button>
            <p className="text-gray-600 grow">10 minutes meditation</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <article className="flex  gap-4 border-b-gray-500 border-b py-4"> 
            <button className="rounded-full border-2 w-6 h-6 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Read for 1 hour</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <article className=" flex gap-4 border-b-gray-500 border-b py-4">
            <button className="rounded-full border-2 w-6 h-6 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Pickup groceries</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <article className=" flex gap-4 border-b-gray-500 border-b py-4">
            <button className="rounded-full border-2 w-6 h-6 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete Todo App on Frontend Mentor</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <section className="p-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
        

      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
         <button className="text-blue-600 font-semibold">All</button>
         <button className="hover:text-blue-600 font-semibold text-gray-400">Active</button>
         <button className="hover:text-blue-600 font-semibold text-gray-400">Completed</button>
        </div>
        
      </section>

      <section className="text-center mt-8 text-gray-400">
        Drag and drop to reorder list
      </section>
  </div>
  );
};

export default App;