const TodoFilter = ({changeFilter}) => { 
    return(
        <section className="container mx-auto mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600 font-semibold"
            onClick={() => changeFilter('all')}>
            All
          </button>
          <button className="hover:text-blue-600 font-semibold text-gray-400"
           onClick={() => changeFilter('active')}>Active</button>
          <button className="hover:text-blue-600 font-semibold text-gray-400"
           onClick={() => changeFilter('completed')}>Completed</button>
        </div>
        
      </section>
    );};
export default TodoFilter;