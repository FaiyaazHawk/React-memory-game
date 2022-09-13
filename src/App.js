import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";


function App() {

  const [score, setScore] = React.useState({
    current: 0,
    best: 0
  })

  function handleCurrentScore() {
    setScore(prevScore => ({
      ...prevScore,
      current: prevScore.current + 1
    }))
  }

  function handleBestScore() {
    setScore(prevScore => ({
      ...prevScore,
      best: prevScore.current,
      current: 0
    }))
  }


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Header score={score} ></Header>
      <Body 
      handleCurrentScore={handleCurrentScore}
      handleBestScore={handleBestScore} 
      ></Body>
    </div>
  );
}

export default App;
