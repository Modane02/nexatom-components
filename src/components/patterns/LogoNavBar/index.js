import React, { useRef, useState, useEffect } from 'react';
import AnimatedHamburgerIcon from '../../cores/AnimatedHamburgerIcon';
import Logo from '../../cores/Logo';
import ButtonLink from '../../elements/ButtonLink'; //TOFIX
import styles from './LogoNavBar.styles.module.scss';


export default function LogoNavBar({logoSrc, logoAlt, backgroundColor, textColor, whatsapp, telefone}) {

    //#region Affix Function
    const [isAffix, setIsAffix] = useState(false);
    const navBar = useRef(null);
    const handleScroll = () => {
        setIsAffix(window.scrollY > 100);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    //#endregion

    //#region Collapse Function
    const navItens = useRef(null);
    const toggleColapse = () =>{
        navItens.current.classList.toggle(styles["active"]);
    }
    //#endregion

    //#region classPicker
    var classes = `${styles.nav} `;
    styles["bg_" + backgroundColor] ? classes += `${styles["bg"]} ${styles["bg_" + backgroundColor]} ` : [];
    isAffix ? classes += `${styles["affix"]} ` : [];
    classes = classes.trim();
    //#endregion

    return ( 
        <nav id="NavBar" ref={navBar} className={classes}>
            
            <Logo src={logoSrc} alt={logoAlt} href="/" objectPosition="left center" height="100%" width="150px"/>

            <div ref={navItens} className={styles.nav_field}>
                <ButtonLink 
                    href={`https://wa.me/+55${whatsapp}`}
                    target="_blank"
                    color={isAffix ? textColor : backgroundColor}
                    background={"transparent"}
                    fontsize="lg"
                >
                    WhatsApp
                </ButtonLink>
                <ButtonLink 
                    href={`tel:55${telefone}`}
                    target="_blank"
                    color={isAffix ? textColor : backgroundColor}
                    background={"transparent"}
                    fontsize="lg"
                >
                    ({telefone.substring(0,2)}) {telefone.substring(2,telefone.length-4)}-{telefone.substring(telefone.length, telefone.length-4)}
                </ButtonLink>
            </div>

            <AnimatedHamburgerIcon 
                background={isAffix ? textColor : backgroundColor}
                className={styles.colapse}
                onclick={toggleColapse}
            />
        </nav>
     );
}