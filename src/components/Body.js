import React from "react";

function Body(props) {
    
    function increaseScore() {
        props.handleCurrentScore()
    }

    function resetScore() {
        props.handleBestScore()
    }



    return (
        <div>
            <button onClick={increaseScore}>Increase score</button>
            <button onClick={resetScore}>Reset score</button>
        </div>
        
        
    )
}

export default Body