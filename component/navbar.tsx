'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav>
      <Link href="/" className="title">
        JOB PORTAL
      </Link>

      <button
        className="menu"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/About" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link href="/Jobs" onClick={toggleMenu}>
            Jobs
          </Link>
        </li>
        <li>
          <Link href="/Companies" onClick={toggleMenu}>
            Companies
          </Link>
        </li>
        <li>
          <Link href="/Contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
