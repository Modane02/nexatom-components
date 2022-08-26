import React from 'react';
import styles from './Text.styles.module.scss'

export default function Text({children, color, size, bold, italic}) {

    //#region classPicker
    var classes = `${styles.text} ${styles["color"]} `;
    styles["color_"+color] ? classes += `${styles["color_"+color]} ` : [];
    styles["text_size_"+size] ? classes += `${styles["text_size_"+size]} ` : `${styles["text_size_md"]} `;
    bold ? classes += `${styles["bold"]} ` : [];
    italic ? classes += `${styles["italic"]} `: [];
    classes = classes.trim();
    //#endregion
    
    return (  
        <p
            className={classes}
        >
            {children}
        </p>
    );
}