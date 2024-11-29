import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropType from "prop-types"


const Cards = ({handleSideBar}) => {
    const [cards,setCards]=useState([])
   useEffect(()=>{
    fetch('deta.json')
    .then(res => res.json())
    .then(data => setCards(data)
    )

    
   },[])
    return (
        <div className="w-2/3 grid grid-cols-2">
            
            {
                cards.map((Cards,index) => <Card key={index} Cards={Cards} handleSideBar={handleSideBar}></Card>)
            }
        </div>
    );
};

Cards.propTypes={
    handleSideBar:PropType.func
}

export default Cards;