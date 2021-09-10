import styles from "../styles/CardContent.module.css";
import React, {useState} from "react";

export default function CardContent({imageSrc,airlineName,allianceName,phoneNum,website}){

    const [isShown, setIsShown] = useState(false)

    return(
        <a href={website} className={styles.card}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >

            <div className={styles.avatarContainer}>
                <img src={imageSrc} alt="Kayak Logo" className={styles.avatar} />
            </div>

            <div className={styles.contactContainer}>

                <div className={styles.title}>{airlineName}</div>
                {isShown ?  <div className={styles.subTitle}>{allianceName}</div> : ""}
                {isShown ? <div className={styles.phone}>{phoneNum}</div> : ""}
                {isShown ? <div className={styles.web}>{website}</div> : ""}

            </div>

        </a>
    )

}