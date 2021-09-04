import React, { useState } from "react";
// import styles from "../styles/Checkbox.module.css'"
import styles from '../styles/Checkbox.module.css'

export default (checked,onChange,label) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
       <div className={styles.checkbox}>
           <div className={styles.border} onClick={() => onChange(!checked)}>
               <div className={`indictor ${checked ? "checked" : ""}`} />
           </div>
                <div className="label">{label}</div>
       </div>
    );

};