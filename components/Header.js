import styles from "../styles/Header.module.css";
import React from "react";

export default function(){

    return(

        <header className={styles.header}>
            <a
                href="https://www.kayak.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/kayak.svg" alt="Kayak Logo" className={styles.logo} />

            </a>
        </header>

    )

}