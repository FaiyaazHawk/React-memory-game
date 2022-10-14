import React from "react";
import "../styles/Card.css"

function Card(props) {
    return (
        <>
            <img className="card" src={props.value} onClick={props.shuffleDeck} alt={props.id}></img>
        </>
    )
}

export default Card