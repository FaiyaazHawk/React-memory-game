import React from "react";

function Scoreboard(props) {

    return (
        <div>
            <h3>Current score: {props.score.score.current}</h3>
            <h3>Best score: {props.score.score.best}</h3>
        </div>

    )
    
}

export default Scoreboard