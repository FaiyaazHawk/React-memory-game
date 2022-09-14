import React from "react";
import Card from "./Card"
import "../styles/Cardgrid.css"
import arai from "../images/arai.jpg"
import daigo from "../images/daigo.jpeg"
import hana from "../images/Hana.jpg"
import haruka from "../images/haruka.jpg"
import ichiban from "../images/ichiban.jpeg"
import kaoru from "../images/kaoru.jpg"
import majima from "../images/majima.jpeg"
import nishiki from "../images/nishiki.jpeg"

function Cardgrid() {

    const images = [
        arai,
        daigo,
        hana,
        haruka,
        ichiban,
        kaoru,
        majima,
        nishiki
    ]
    

    const [cards, setCards] = React.useState(images)

    
    function shuffleDeck() {
        setCards(shuffleArray(cards))
    }
    ///found online. works so using it
    function shuffleArray(array) {
        return [...array].sort(() => Math.random() - 0.5)
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