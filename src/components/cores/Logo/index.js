import Image from 'next/image';
import React from 'react';
import styles from './Logo.styles.module.scss';

export default function Logo({href, src, alt, imgPriority, objectPosition, minWidth, width, maxWidth, minHeight, height, maxHeight}) {
    return ( 
        <a href={href} className={styles.logo} style={{minWidth: minWidth, width: width, maxWidth: maxWidth, minHeight: minHeight, height: height, maxHeight: maxHeight,}}>
            <Image src={src} alt={alt} layout="fill" objectFit="contain" objectPosition={objectPosition} priority={imgPriority}/>
        </a>
     );
}