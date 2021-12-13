import React from 'react';
import styles from "./NavBar.module.css"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <header className={styles.navbar}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/plan">Plan</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;