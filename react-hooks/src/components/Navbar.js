import React from 'react';

export const Navbar = () => (
    <nav className = "navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand">
            Github Search
        </div>
        <ul className="navbar-nav">
            <li className="navbar-item">
                <a href="/" className = "nav-link">Home</a>
            </li>
            <li className="navbar-item">
                <a href="/about" className = "nav-link">Info</a>
            </li>
        </ul>
    </nav>
)