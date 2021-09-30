import React from 'react';
import Logo from './Logo';

function Header() {
    return (
        <header className="headerContainer">

            <Logo />

            <h1 className="headerText">Energy Calculator</h1>
        </header>
    )
}

export default Header
