import React from "react";
import Card from "./Card"
import "../styles/Cardgrid.css"

function Cardgrid() {
    const [cards, setCards] = React.useState([
        1,2,3,4,5,6,7,8
    ])



    
    const cardElementts = cards.map(card => <Card value={card}></Card>)

    return (
        <div className="grid">
            {cardElementts}
        </div>
    )
}

export default Cardgrid