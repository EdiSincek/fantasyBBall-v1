import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Header.css';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <button className="hamburger-menu" onClick={handleMenuClick}>
                <GiHamburgerMenu size={24} />
            </button>
            <ul className="dropdown-menu" style={{ display: showMenu ? 'block' : 'none' }}>
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
            <h1>FantasyVZ</h1>
        </header>
    );
}

export default Header;
