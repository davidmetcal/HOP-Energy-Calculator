import React from 'react';
import Logo from './Logo';

function Header() {
    return (
        <div>
        <header>
            <div className="content">
            <Logo width="150" />
            <h1 className="inline headerTitle">Energy Calculator</h1>
            </div>
        </header>
        </div>
    )
}

export default Header
