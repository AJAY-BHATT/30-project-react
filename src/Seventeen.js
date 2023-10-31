import React, { useState } from 'react'
import './styles/Seventeen.css'


export const Seventeen = () => {
    const[isOpen, setIsOpen]= useState(false);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <button className='menu-icon' onClick={toggleMenu}>
        ☰

        </button>
        <ul className={`menu ${isOpen?'open':''}`}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Help-us</li>
        </ul>
    </div>
  )
}
