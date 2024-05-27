import MoonIcon from "./iconos/MoonIcon";

const Header = () => { 
    return(
        <header className="container mx-auto px-4 mt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white  ">todo</h1>
          <button>
            <MoonIcon />
          </button>
          </div>
        
        
        </header>
    ); };

export default Header;