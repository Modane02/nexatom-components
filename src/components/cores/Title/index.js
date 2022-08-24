import React from 'react';
import styles from './Title.styles.module.scss'

export default function Title({ children, color, size }) {

    //#region classPicker
    var classes = `${styles.title} ${styles["color"]} `;
    styles["color_" + color] ? classes += `${styles["color_" + color]} ` : [];
    styles["title_size_" + size] ? classes += `${styles["title_size_" + size]} ` : `${styles["title_size_h1"]} `;
    classes = classes.trim();
    //#endregion

    return (
        <h1
            className={classes}
        >
            {children}
        </h1>
    );
}