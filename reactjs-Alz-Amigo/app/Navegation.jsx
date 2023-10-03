"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <React.Fragment>
            <div className='container-fluid mt-3'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            <Image src={'/images/image_03.svg'} height={32} width={32} alt="Logotype | Memory Cards" />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarColor03">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/" onClick={handleLinkClick}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        Games
                                    </a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="/games/memorycards" onClick={handleLinkClick}>
                                            Memory Cards
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default NavBar;