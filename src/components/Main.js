import React from "react";
import { Link } from "react-router-dom";
import background_img from "../img/bg-triangle.svg"

export default function Main({playerPicked, setPicked}){

    const playerPick = (e) =>{
        playerPicked(e.target.value)
        setPicked(true)
    }
    
    return(
        <div className="game-buttons-wrapper">
            <div className="game-buttons-one">
                <Link to="/game">
                    <button
                    className="game-buttons game-buttons-paper" 
                    value="paper" 
                    onClick={playerPick}>
                    </button>
                </Link>

                <Link to="/game">
                    <button
                    className="game-buttons game-buttons-scissors" 
                    value="scissors" 
                    onClick={playerPick}>
                    </button>
                </Link>
            </div>
            

            <div className="game-buttons-two">
                <Link to="/game">
                    <button
                    className="game-buttons game-buttons-rock" 
                    value="rock" 
                    onClick={playerPick}>
                    </button>
                </Link>
            </div>
        </div>
    )
}