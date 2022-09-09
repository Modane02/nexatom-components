import React from 'react';
import styles from './SideCTACard.styles.module.scss';
import Image from 'next/image';
import CallToActionText from '../../elements/CallToActionText';

export default function SideCTACard({children, textColor, title, titleColor, buttonText, buttonColor, image, alt, orientation}) {
    
    //#region classPicker
    var classes = `${styles["cta_card"]} `;
    classes += `${styles["bg"]} `;
    classes += `${styles["round_rounded"]} `;
    orientation ? classes += `${styles[orientation]} ` : classes += `${styles["right"]} `;
    //dashed ? classes += `${styles["border_dashed"]} ` : [];
    classes = classes.trim();
    //#endregion

    return ( 
        <div className={classes}>
            <div style={{width: "30%", height: "auto", minWidth: "100px", maxWidth: "200px",}}>
                <Image src={image} alt={alt} layout="responsive" width={100} height={100}  objectFit="fill"/>
            </div>
            <CallToActionText 
                title={title}
                titleSize="h3" 
                titleColor={titleColor}
                textColor="dark" 
                buttonColor={buttonColor} 
                buttonText={buttonText}
            >
                Garanta as melhores condições e coberturas par seu Carro. Cobertura completa que cabe no seu bolso, simule agora.
            </CallToActionText>
        </div>
     );
}