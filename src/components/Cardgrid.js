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
import kiryu from "../images/kiryu.jpg"

function Cardgrid(props) {

    const images = [
        {
            name: arai,
            id: 1
        },
        {
            name: daigo,
            id: 2
        },
        {
            name: hana,
            id: 3
        },
        {
            name:haruka,
            id: 4
        },
        {
            name:ichiban,
            id: 5
        },
        {
            name:kaoru,
            id: 6
        },
        {
            name:majima,
            id: 7
        },
        {
            name:nishiki,
            id: 8
        },
        {
            name:kiryu,
            id:9
        }
    ]
    

    const [cards, setCards] = React.useState(images)
    const [pickedCards, setPickedCards] = React.useState([])

    
    function handleCard(alt) {
        if (pickedCards.includes(alt)) {
            props.resetScore()
            setPickedCards([])
        } else {
            props.increaseScore()
            setPickedCards(()=>(
                [...pickedCards, alt]
            ))
        }
    }

    function shuffleDeck(event) {
        handleCard(event.target.alt)
        setCards(shuffleArray(cards))
    }
    ///found online. works so using it
    function shuffleArray(array) {
        return [...array].sort(() => Math.random() - 0.5)
    }
    
    const cardElements = cards.map((card) => 
    <Card shuffleDeck={shuffleDeck}
        id={card.id} 
        value={card.name}
        key={card.id}
         >
        </Card>)

    return (
        <div className="grid">
            {cardElements}
        </div>
    )
}

export default Cardgrid