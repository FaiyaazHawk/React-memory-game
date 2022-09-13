import React from "react";
import Scoreboard from "./Scoreboard";

function Header(props) {
    return(
        <header>
           <h1>Can you recall?</h1>
           <Scoreboard score={[props.score]}/>
        </header>
    )
}

export default Header