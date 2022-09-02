import React, { useState } from 'react';
import Logo from '../../cores/Logo';
import ButtonLink from '../../elements/ButtonLink'; //TOFIX
import styles from './LogoNavBar.styles.module.scss';


export default function LogoNavBar({logoSrc, logoAlt, backgroundColor, textColor, whatsapp, telefone}) {

    //#region classPicker
    var classes = `${styles.nav} `;
    styles["bg_" + backgroundColor] ? classes += `${styles["bg"]} ${styles["bg_" + backgroundColor]} ` : [];
    classes = classes.trim();
    //#endregion

    console.log("Render");
    //Seta o estado de affix da nav
    const [isAffix, setIsAffix] = useState(false);

    return ( 
        <nav id="NavBar" className={classes}>
            
            <button onClick={()=>{//Implementação gambiarra de um button pra criar o efeito affix
                const nav = document.getElementById("NavBar");
                if(!nav.classList.contains(styles.affix)){
                    nav.classList.add(styles.affix);
                }
                else{
                    nav.classList.remove(styles.affix);
                }
                setIsAffix(!isAffix);
            }}>On</button>

            <Logo src={logoSrc} alt={logoAlt} href="/" objectPosition="left center" height="100%" width="150px"/>
            <div id="nav" className={styles.nav_field}>
                <ButtonLink 
                    href={`https://wa.me/+55${whatsapp}`}
                    target="_blank"
                    color={isAffix ? textColor : backgroundColor}
                    background={"transparent"}
                >
                    WhatsApp
                </ButtonLink>
                <ButtonLink 
                    href={`tel:55${telefone}`}
                    target="_blank"
                    color={isAffix ? textColor : backgroundColor}
                    background={"transparent"}
                >
                    ({telefone.substring(0,2)}) {telefone.substring(2,telefone.length-4)}-{telefone.substring(telefone.length, telefone.length-4)}
                </ButtonLink>
            </div>
        </nav>
     );
}