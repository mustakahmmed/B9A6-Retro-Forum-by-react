
import PropType from "prop-types"


const Card = ({Cards,handleSideBar}) => {
    const{recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}=Cards
    
    
    return (
        <div className="">
        {/* card section */}
        <section className="">
            <div className="text-left my-5 mx-16 p-5 rounded-xl border-solid border-2  mb-5">
            <img className="w-full" src={recipe_image} alt="" />
            <h1 className="text-2xl font-bold mt-10 mb-4">{recipe_name}</h1>
            <p className="text-gray-500" >{short_description}</p>
            <ul className="my-7 ">
                <h1 className="text-xl font-bold">Ingredients: {ingredients.length}</h1>
            {
                ingredients.map(item => <li className="text-gray-500 ml-4">{item}</li>
                )
            }
            </ul>
            <div className="flex justify-start gap-12 items-center text-gray-600">
                <h1 className="font-semibold"><i class="fa-regular fa-clock mr-2"></i>{preparing_time}</h1>
                <h1 className="font-semibold"><i class="fa-solid fa-fire mr-2"></i>{calories}</h1>
            </div>
            <button onClick={()=>{handleSideBar(Cards)}} className="px-4 py-3 bg-green-500 rounded-full hover:bg-green-600 mt-5">Want to Cook</button>
            </div>
        </section>
        </div>
    );
};

Card.propTypes={
    Cards:PropType.object,
    handleSideBar:PropType.func
}

export default Card;