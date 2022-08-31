import React, { useState } from 'react'
import Modal from './Modal'


export default function Footer() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(prevOpen => !prevOpen)
    }

  return (
    <div className="footer-container">
        <button className="rules-btn" onClick={toggle}>RULES</button>
        <Modal open={isOpen} toggle={toggle}/>
        <div className="footer-info">
            <p>Made by <a className='footer-links' href="https://github.com/robo311">robo311</a>. Challenge by <a className='footer-links' href="https://frontendmentor.io/">Frontend Mentor</a></p>
            
        </div>
    </div>
  )
}
