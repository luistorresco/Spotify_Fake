import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/Spotify_Icon_RGB_Green.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
