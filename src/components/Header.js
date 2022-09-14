import React from "react";
import Scoreboard from "./Scoreboard";
import "../styles/Header.css"


function Header(props) {
    
    return(
        <header>
           <h1>Memory game</h1>
           <Scoreboard score={props}/>
        </header>
    )
}

export default Header