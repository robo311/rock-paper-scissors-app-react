import React from 'react'
import ReactDom from "react-dom"
import rules from "../img/image-rules.svg"

export default function Modal({open, toggle}) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className="rules-overlay"></div>
            <div className="rules-container">
                <div className="rules-header">
                    <h1>RULES</h1>
                    <button onClick={toggle}></button>
                </div>
                <div className="rules-footer">
                    <img src={rules} alt="rules" />
                </div>
            </div>
        </>,
        document.getElementById("rules")
    )
}
