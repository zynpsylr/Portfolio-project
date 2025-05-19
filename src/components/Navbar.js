import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Ana Sayfa</Link>
                <Link to="/about">Ben kimim?</Link>
                <Link to="/skills">Neler Yapabilirim?</Link>
                <Link to="/projects">Portfolyo</Link>
                <Link to="/contact">İletişim</Link>
            </div>
        </nav>
    );
}

export default Navbar;
