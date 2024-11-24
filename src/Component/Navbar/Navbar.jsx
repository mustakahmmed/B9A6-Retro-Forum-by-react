

const Navbar = () => {
    return (
        <div>
       <section className="flex justify-between items-center w-10/12 mx-auto my-7">
            <div>
              <button className="text-5xl font-bold px-5 py-3 rounded-xl hover:bg-slate-200">Recipe Calories</button>
            </div>
            <div className="text-2xl text-gray-500">
                <button className="px-3 py-1 hover:bg-slate-200 rounded-lg">Home</button>
                <button className="mx-4 px-3 py-1 hover:bg-slate-200 rounded-lg">Recipes</button>
                <button className="mr-4 px-3 py-1 hover:bg-slate-200 rounded-lg">About</button>
                <button className=" px-3 py-2 hover:bg-slate-200 rounded-lg">Search</button>
            </div>
            <div className="absulute">
                <i  class="fa-solid fa-magnifying-glass relative left-9 text-gray-500"></i>
                <input className="bg-slate-100  pl-10 pr-3 py-3 rounded-full placeholder:pl-1" placeholder="scarch" type="text" name="" id="" />
                <i class="fa-regular fa-user ml-5 p-4 bg-green-400 rounded-full"></i>
            </div>
       </section>
        </div>
    );
};

export default Navbar;