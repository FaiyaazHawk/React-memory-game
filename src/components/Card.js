import React from "react";
import "../styles/Card.css"

function Card(props) {
    return (
        <div className="card">
            <h2>{props.value}</h2>
        </div>
    )
}

export default Card