import React from "react";
import "../styles/Card.css"

function Card(props) {
    return (
        <div>
            <div className="card" onClick={props.shuffleDeck}>{props.value}</div>
        </div>
    )
}

export default Card