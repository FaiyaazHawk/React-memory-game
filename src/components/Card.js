import React from "react";
import "../styles/Card.css"

function Card(props) {
    return (
        <div>
            <img className="card" src={props.value} onClick={props.shuffleDeck}></img>
        </div>
    )
}

export default Card