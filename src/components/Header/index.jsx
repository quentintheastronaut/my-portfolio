import React from 'react';
import './index.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm </h5>
                <h1>Quentin Dang</h1>
                <h5 className='text-light'>Fullstack Developer</h5>

                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me.png" />
                </div>

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header