import React from 'react';
import Image from 'next/image';
import styles from './LogoParceira.styles.module.scss'

export default function LogoParceira({href, src, alt, imgPriority, width, height}){
    return(
        <a href={href} className={styles.logo}>
            <Image src={src} alt={alt} layout="responsive" width={100} height={100} objectFit="contain" priority={imgPriority}/>
        </a>
    )
}