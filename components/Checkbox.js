import React, { useState } from "react";
import styles from '../styles/Checkbox.module.css'



export default function Checkbox({ label,onClick})
{

    const [isChecked, setIsChecked] = useState(true);
    const toggleCheck = () => {
        console.log("before checked---- " +isChecked)
        if (isChecked == true){
            setIsChecked(false)
        }
        else(
            setIsChecked(true)
        )

        //setIsChecked(!isChecked);
        console.log("after checked---- " +isChecked)
        return isChecked
    };

    return (
        <div className={styles.checkbox}>
            <div className={styles.border} onClick={event => onClick(toggleCheck()) }>
            {/*<div className={styles.border} onClick={() => onChange(!checked)}>*/}
                {isChecked ? <div className={styles.indicator}></div> : ""}
            {/*    {isChecked ? "" : <div className={styles.indicator}></div>}*/}
            </div>

            <div className={styles.checkboxLabel}>
                {label}
            </div>

        </div>
    );

};