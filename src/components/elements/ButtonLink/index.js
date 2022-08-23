import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ButtonLink.styles.module.scss';
import Text from '../../cores/Text';

export default function ButtonLink({ type, href, onclick, children, color, background, border, round, dashed, fontsize, padding, margin, height, width }) {

    //#region Custom Style Maker
    var customStyle = {};
    if (padding) customStyle["padding"] = padding;
    if (margin) customStyle["margin"] = margin;
    if (height) customStyle["height"] = height;
    if (width) customStyle["width"] = width;
    console.log(customStyle);
    //#endregion

    //#region classPicker
    var classes = `${styles.btn} `;
    styles["bg_" + background] ? classes += `${styles["bg"]} ${styles["bg_" + background]} ` : [];
    border ? classes += `${styles["border"]} ${styles["border_" + border]} ` : [];
    round ? classes += `${styles["round_" + round]} ` : `${styles["round_rounded"]} `;
    dashed ? classes += `${styles["border_dashed"]} ` : [];
    classes = classes.trim();
    //#endregion


    //#region onClick Event
    function handleClick(event) {
        onclick ? onclick() : [];

        createRipple(event);
    }

    function createRipple(event) {
        const button = event.currentTarget;

        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add(styles["ripple"]);

        const ripple = button.getElementsByClassName(styles["ripple"])[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }
    //#endregion

    return (
        <a
            className={classes}
            style={customStyle}
            href={href}
            onClick={handleClick} //se não funcionar, criar versão do button
            type={type}
            role="button"
        >
            <Text color={color} size={fontsize}>{children}</Text>
        </a>
    )
}

