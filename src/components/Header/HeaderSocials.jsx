import React from 'react'
import {
    BsLinkedin,
    BsGithub
} from 'react-icons/bs'
import {
    FaLinkedin,
    FaDribbbleSquare, FaGithubSquare
} from 'react-icons/fa'

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href="https:/linkedin.com" target="_blank" alt="#"><FaLinkedin /></a>
            <a href="https:/linkedin.com" target="_blank" alt="#"><FaGithubSquare /></a>
            <a href="https:/linkedin.com" target="_blank" alt="#"><FaDribbbleSquare /></a>
            <a href="https:/linkedin.com" target="_blank" alt="#"></a>
        </div>
    )
}

export default HeaderSocials