import React from 'react'
import { useState } from 'react'
import './index.css'
import {
    AiOutlineHome,
    AiOutlineUser
} from 'react-icons/ai'
import {
    BiBook,
    BiMessageSquareDetail
} from 'react-icons/bi'
import {
    RiServiceLine
} from 'react-icons/ri'
import Experience from '../Experience'


function Nav() {
    const [activeNav, setActiveNav] = useState('#')

    function handleSelectNav(nav) {
        setActiveNav(nav)
    }

    return (
        <nav>
            <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => handleSelectNav('#')}><AiOutlineHome /></a>
            <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => handleSelectNav('#about')}><AiOutlineUser /></a>
            <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => handleSelectNav('#experience')}><BiBook /></a>
            <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => handleSelectNav('#services')} ><RiServiceLine /></a>
            <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => handleSelectNav('#contact')}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav