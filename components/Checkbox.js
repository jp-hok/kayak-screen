import React, { useState } from "react";
import styles from '../styles/Checkbox.module.css'



// { checked,onChange,label}
export default function Checkbox({ checked,onChange,label}) {

    function onChange(val){
        setIsChecked(val)
        console.log("hello")
        toggleCheck()
        console.log(isChecked)
    }

    const [isChecked, setIsChecked] = useState(false);

    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };

    // return (
    //    <div className="checkbox">
    //        <div className="border" onClick={() => onChange(!checked)}>
    //            <div className={`indicator ${checked ? "checked" : ""}`} />
    //        </div>
    //             <div className="label">{label}</div>
    //    </div>
    // );

    return (
        <div className={styles.checkbox}>
            <div className={styles.border} onClick={() => onChange(!checked)}>
                {isChecked ? <div className={styles.indicator}></div> : ""}
                {/*<div className={styles.indicator}></div>*/}
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