import React, { Children } from 'react';
import Logo from '../../cores/Logo';
import ButtonLink from '../../elements/ButtonLink'; //TOFIX
import styles from './LogoNavBar.styles.module.scss';


export default function LogoNavBar({logoSrc, logoAlt, backgroundColor, textColor, whatsapp, telefone}) {
    return ( 
        <nav className={styles.nav}>
            <Logo src={logoSrc} alt={logoAlt} href="/" objectPosition="left center" height="100%" width="150px"/>
            <div id="nav" className={styles.nav_field}>
                <ButtonLink 
                    href={`https://wa.me/+55${whatsapp}`}
                    target="_blank"
                    color={textColor}
                >
                    WhatsApp
                </ButtonLink>
                <ButtonLink 
                    href={`tel:55${telefone}`}
                    target="_blank"
                    color={textColor}
                >
                    ({telefone.substring(0,2)}) {telefone.substring(2,telefone.length-4)}-{telefone.substring(telefone.length, telefone.length-4)}
                </ButtonLink>
            </div>
        </nav>
     );
}