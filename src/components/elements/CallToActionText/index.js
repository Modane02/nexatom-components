import React from 'react';
import styles from './CallToActionText.styles.module.scss'
import Marker from '../../cores/Marker';
import Text from '../../cores/Text';
import Title from '../../cores/Title';
import ButtonLink from '../ButtonLink';

export default function CallToActionText({children, textColor, textSize, title, titleColor, titleSize, buttonText, buttonColor}){
    return ( 
        <div className={styles.cta}>
            <Title color={titleColor} size={titleSize}>{title}</Title>
            <Text color={textColor} size={textSize}>{children}</Text>
            <ButtonLink fontsize="h4" color="light" background={buttonColor}><Marker bold>{buttonText}</Marker></ButtonLink>
        </div>
     );
}