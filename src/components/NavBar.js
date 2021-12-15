import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const handleNewSearch = (e) => {
    e.preventDefault();
    props.onSearch(false);
  };
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li onClick={handleNewSearch}>
            <Link to="/">Search</Link>
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
