import React, { useState } from "react";
import styles from '../styles/Checkbox.module.css'

export default function Checkbox({ checked,onChange,label}) {

    function onChange(val){
        setIsChecked(val)
        console.log("hello1")
        toggleCheck()
        console.log(isChecked)
    }

    const [isChecked, setIsChecked] = useState(false);
    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={styles.checkbox}>

            <div className={styles.border} onClick={() => onChange(!checked)}>
                {isChecked ? <div className={styles.indicator}></div> : ""}
            </div>

            <div className={styles.checkboxLabel}>
                {label}
            </div>

        </div>
    );

};