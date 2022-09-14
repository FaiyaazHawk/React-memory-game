import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./styles/App.css"


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

  function resetCurrentScore() {
    setScore(prevScore => ({
      ...prevScore,
      current: 0
    }))
  }


  return (
    <div className="App">
      <Header score={score} ></Header>
      <Body 
      score={score}
      handleCurrentScore={handleCurrentScore}
      handleBestScore={handleBestScore}
      resetCurrentScore={resetCurrentScore}
      ></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
