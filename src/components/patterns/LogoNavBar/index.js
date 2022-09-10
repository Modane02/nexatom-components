import React, { useRef, useState } from 'react';
import AnimatedHamburgerIcon from '../../cores/AnimatedHamburgerIcon';
import Logo from '../../cores/Logo';
import ButtonLink from '../../elements/ButtonLink'; //TOFIX
import styles from './LogoNavBar.styles.module.scss';


export default function LogoNavBar({logoSrc, logoAlt, backgroundColor, textColor, whatsapp, telefone}) {

    //#region classPicker
    var classes = `${styles.nav} `;
    styles["bg_" + backgroundColor] ? classes += `${styles["bg"]} ${styles["bg_" + backgroundColor]} ` : [];
    classes = classes.trim();
    //#endregion

    
    //Seta o estado de affix da nav
    const [isAffix, setIsAffix] = useState(false);

    //Seta constantes de referência DOM
    const navBar = useRef(null);
    const navItens = useRef(null);
    //Função de colapse
    const toggleColapse = () =>{
        navItens.current.classList.toggle(styles["active"]);
    }

    return ( 
        <nav id="NavBar" ref={navBar} className={classes}>
            
            <Logo src={logoSrc} alt={logoAlt} href="/" objectPosition="left center" height="100%" width="150px"/>
            
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