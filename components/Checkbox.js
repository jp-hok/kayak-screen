import React, { useState } from "react";
import styles from '../styles/Checkbox.module.css'



// { checked,onChange,label}
export default function Checkbox({ checked,onChange,label}) {

    function onChange(val){
        setIsChecked(val)
        console.log("hello1")
        toggleCheck()
        console.log(isChecked)
    }

    function onChange2(val){
        setIsChecked2(val)
        console.log("hello2")
        toggleCheck2()
        console.log(isChecked2)
    }

    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };

    const toggleCheck2 = () => {
        setIsChecked2(!isChecked2);
    };

    return (
        <div className={styles.checkbox}>

            <div className={styles.border} onClick={() => onChange(!checked)}>
                {isChecked ? <div className={styles.indicator}></div> : ""}
            </div>

            <div className={styles.checkboxLabel}>
                {label}
            </div>

            {/*a*/}

            <div className={styles.border} onClick={() => onChange2(!checked)}>
                {isChecked2 ? <div className={styles.indicator}></div> : ""}
            </div>

            <div className={styles.checkboxLabel}>
                {label}
            </div>


        </div>

        // <div className={styles.checkbox }>
        //     <div className={styles.border}></div>
        //     <div className={styles.indicator}></div>
        //     {/*<div className={styles.border} onClick={() => onChange(!checked)}>*/}
        //     {/*    <div className={`styles.indicator ${isChecked ? "checked" : ""}`} />*/}
        //     {/*    <div className={styles.indicator} />*/}
        //     {/*</div>*/}
        //
        //     {/*{isChecked ? `styles.checkbox ${isChecked ? "checked" : ""}`}*/}
        //     {/*{isChecked ? <div><h1>True</h1></div> : <div><h1>False</h1></div>}*/}
        //     <div className="{styles.indicator}">{label}</div>
        // </div>

    );

};