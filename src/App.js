import React from "react"
import Main from "./components/Main";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {

  const [score, setScore] = React.useState(0)
  const [player, setPlayer] = React.useState("")
  const [isPicked, setPicked] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[isPicked])


  return (
    <Router>
    <div className="App">
      <div className="container">
        <Header score={score}/>
        <Routes>
          <Route 
            exact path="/rock-paper-scissors-app-react/" 
            element={
              <Main playerPicked={setPlayer} setPicked={setPicked}/>
            }>
            </Route>
          <Route 
            exact path="/rock-paper-scissors-app-react/game" 
            element={
            <Game 
              score={score} 
              setScore={setScore} 
              player={player}
              isLoading={loading}
              setPicked={setPicked}
              />
            }>
          </Route>
        </Routes>
        <Footer/>
      </div>
    </div>
    </Router>
  )
}

export default App;