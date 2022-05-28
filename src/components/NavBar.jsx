import React from 'react';
import logo from "../assets/branding/logo.png";
import classes from './navbar.module.css';

function NavBar() {
    return (
        <nav className={classes.navbar}>
            <img src={logo} alt="Company Logo" className={classes.logotipo}/>
        </nav>
    )
}

export default NavBar;