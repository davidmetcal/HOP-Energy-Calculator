import React from 'react';
import Logo from './Logo';

function Header() {
    return (
        <header className="inline">
            <div className="logoContainer">
            <Logo />
            </div>


            <div className="headerText">
            <h1>Energy Calculator</h1>
            </div>
        </header>
    )
}

export default Header
