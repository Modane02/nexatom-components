import React from 'react';
import styles from './Marker.styles.module.scss'

export default function Marker({children, color, bold, italic, muted}) {
    
    //#region classPicker
    var classes = "";
    styles["color_"+color] ? classes += `${styles["color"]} ${styles["color_"+color]} `: [];
    bold ? classes += `${styles["bold"]} ` : [];
    italic ? classes += `${styles["italic"]} `: [];
    muted ? classes += `${styles["muted"]} `: [];
    //classes = classes.trim();
    //#endregion

    return (  
        <span
            className={classes}
        >
            {children}
        </span>
    );
}