import React from "react";
import BounceLoader from "react-spinners/BounceLoader"
import rock from "../img/icon-rock.svg"
import paper from "../img/icon-paper.svg"
import scissors from "../img/icon-scissors.svg"
import { Link } from "react-router-dom"

export default function Game({score, setScore, player, isLoading, setPicked}){

    const [computer, setComputer] = React.useState("")
    const [message, setMessage] = React.useState("")


    const pickedElementPlayer = () =>{
        if(player === "rock"){
            return (
                <div className="picked-wrapper">
                    <div className="picked picked-rock">
                        <img src={rock} alt="rock" />
                    </div>
                </div>
            )
        }

        if(player === "paper"){
            return (
                <div className="picked-wrapper">
                    <div className="picked picked-paper">
                        <img src={paper} alt="paper" />
                    </div>
                </div>
            )
        }

        if(player === "scissors"){
            return (
                <div className="picked-wrapper">
                    <div className="picked picked-scissors">
                        <img src={scissors} alt="scissors" />
                    </div>
                </div>
            )
        }
    }

    const pickedElementComputer = () => {

        if(computer === "rock"){
            return (
                <div className="picked-wrapper">
                    <div className="picked picked-rock">
                        <img src={rock} alt="rock" />
                    </div>
                </div>
            )
        }

        if(computer === "paper"){
            return (
                <div className="picked-wrapper">
                    <div className="picked picked-paper">
                        <img src={paper} alt="paper" />
                    </div>
                </div>
            )
        }

        if(computer === "scissors"){
            return (
                <div className="picked-wrapper">
                    <div className="picked picked-scissors">
                        <img src={scissors} alt="scissors" />
                    </div>
                </div>
            )
        }
    }


    const handleScoreWin = () =>{
        setTimeout(()=>{
            setScore(score + 1)
        },1800)
    }

    const handleScoreLose = () =>{
        setTimeout(()=>{
            setScore(score - 1)
        },1800)
    }

    const handleComputer = () => {
        const options = ["rock", "paper", "scissors"]
        setComputer(options[Math.floor(Math.random()*3)])
    }


    React.useEffect(()=>{
        handleComputer()
    },[])
    
    React.useEffect(()=>{
        function result(){
            if(player === "rock" && computer === "scissors"){
              setMessage("YOU WON")
              handleScoreWin()
            }else if(player === "rock" && computer === "paper"){
              setMessage("YOU LOST")
              handleScoreLose()
            }else if(player === "paper" && computer === "scissors"){
              setMessage("YOU LOST")
              handleScoreLose()
            }else if(player === "paper" && computer === "rock"){
              setMessage("YOU WON")
              handleScoreWin()
            }else if(player === "scissors" && computer === "paper"){
              setMessage("YOU WON")
              handleScoreWin()
            }else if(player === "scissors" && computer === "rock"){
              setMessage("YOU LOST")
              handleScoreLose()
            } else{
              setMessage("DRAW")
            }
          }
        result()
    },[computer])

    
    return(
        <div>
            <div className="pick-title">
                <h3>YOU PICKED</h3>
                <h3>OPPONENT PICKED</h3>
            </div>

            <div className="picked-container">
                {pickedElementPlayer()}
                {isLoading ? <BounceLoader color={"white"} loading={isLoading} size={200}/> : pickedElementComputer()}
            </div>

           {isLoading === false && <div className="result-wrapper">
                <h1 className="result-title">{message}</h1>
                <Link to="/">
                    <button className="play-again-btn" onClick={()=>{setComputer()
                        setPicked()}}>Play Again</button>
                </Link>

           </div>}
        </div>
    )
}