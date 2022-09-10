import React, { useRef } from 'react';
import styles from './AnimatedHamburgerIcon.styles.module.scss';

export default function AnimatedHamburgerIcon({background, onclick, className}) {

    //#region classPicker
    var classes = `${styles['bg']} `;
    styles["bg_" + background] ? classes += `${styles["bg_" + background]} ` : classes += `${styles["bg_dark"]} `;
    classes = classes.trim();
    //#endregion

    //#region Event Handle
    const hamburger = useRef(null);
    function handleEvent(){
        hamburger.current.classList.toggle(styles["change"]);
        if(onclick) onclick();
    }
    //#endregion

    return ( 
        <div ref={hamburger} className={className + ` ${styles.hamburger_icon}`} onClick={handleEvent}>
            <div className={classes + ` ${styles.bar1}`}></div>
            <div className={classes + ` ${styles.bar2}`}></div>
            <div className={classes + ` ${styles.bar3}`}></div>
        </div>
     );
}
