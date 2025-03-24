import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <h1 className="site-title">Product Reviews</h1>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/reviews">Reviews</Link></li>
                    <li><Link to="/premium">Premium</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;