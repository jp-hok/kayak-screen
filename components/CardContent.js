import styles from "../styles/CardContent.module.css";
import React from "react";

export default function CardContent({imageSrc,airlineName,allianceName,phoneNum,website}){

    return(
        <a href="https://nextjs.org/docs" className={styles.card}>

            <div className={styles.avatarContainer}>
                <img src={imageSrc} alt="Kayak Logo" className={styles.avatar} />
            </div>

            <div className={styles.contactContainer}>
                <div className={styles.title}>{airlineName}</div>
                <div className={styles.subTitle}>{allianceName}</div>
                <div className={styles.phone}>{phoneNum}</div>
                <div className={styles.web}>{website}</div>
            </div>

        </a>

    )

}