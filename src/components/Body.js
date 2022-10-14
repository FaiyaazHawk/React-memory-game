import React from "react";
import Cardgrid from "./Cardgrid"

function Body(props) {
    /////functions to increase and reset score. apply to game logic in body
    function increaseScore() {
        props.handleCurrentScore()
    }

    function resetScore() {
        if (props.score.current > props.score.best) {
            props.handleBestScore()
        } else {
            props.resetCurrentScore();
        }
        
    }



    return (
        <>
            <Cardgrid
            increaseScore={increaseScore}
            resetScore={resetScore}
            ></Cardgrid>
        </>
        
        
    )
}

export default Body