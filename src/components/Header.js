import React from "react";
import logo from "../img/logo.svg"

export default function Header({score}){
    return (
        <div>
            <div className="header-wrapper">
                <div className="header">
                    <img src={logo} alt="logo" />
                    <div className="score">SCORE <br/> <span>{score}</span></div>
                </div>
            </div>
        </div>
    )
}