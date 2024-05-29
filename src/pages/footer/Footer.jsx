import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <hr />
      <p><b>Profesor: </b>Juan Jose Gallego</p>
      <p>
        <b>Desarrollado por: </b> 
        <a
          href="https://www.linkedin.com/in/ltorresco/"
          target="_blank"
          rel="noreferrer"
        >
            Luis Fernando Torres Correa
        </a>
      </p>
      <p>© 2024 - Todos los derechos reservados</p>
      <p>Medellín - Colombia</p>
    </div>
  );
}
