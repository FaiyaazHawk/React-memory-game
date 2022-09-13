import React from "react";
import Card from "./Card"
import "../styles/Cardgrid.css"

function Cardgrid() {
    const [cards, setCards] = React.useState([
        1,2,3,4,5,6,7,8
    ])

    function shuffleDeck() {
        console.log('shuffle')
    }

    
    const cardElements = cards.map((card) => 
    <Card shuffleDeck={shuffleDeck} 
        value={card}
        key={card}
         >
        </Card>)

    return (
        <div className="grid">
            {cardElements}
        </div>
    )
}

export default Cardgrid