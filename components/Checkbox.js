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

    const [isChecked, setIsChecked] = useState(false);
    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };

    // const [isChecked2, setIsChecked2] = useState(false);

    // const toggleCheck2 = () => {
    //     setIsChecked2(!isChecked2);
    // };

    // function onChange2(val){
    //     setIsChecked2(val)
    //     console.log("hello2")
    //     toggleCheck2()
    //     console.log(isChecked2)
    // }


    return (
        <div className={styles.checkbox}>

            <div className={styles.border} onClick={() => onChange(!checked)}>
                {isChecked ? <div className={styles.indicator}></div> : ""}
            </div>

            <div className={styles.checkboxLabel}>
                {label}
            </div>

            {/*a*/}

            {/*<div className={styles.border} onClick={() => onChange2(!checked)}>*/}
            {/*    {isChecked2 ? <div className={styles.indicator}></div> : ""}*/}
            {/*</div>*/}

            {/*<div className={styles.checkboxLabel}>*/}
            {/*    {label}*/}
            {/*</div>*/}


        </div>
    );

};