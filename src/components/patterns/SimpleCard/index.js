import Image from 'next/image';
import React from 'react';
import Text from '../../cores/Text';
import styles from './SimpleCard.styles.module.scss';

function SimpleCard({children, border, dashed, classes, image, alt}) {

    //#region classPicker
    var classes = `${styles["simple_card"]} `;
    classes += `${styles["bg"]} `;
    classes += `${styles["round_rounded"]} `;
    border ? classes += `${styles["border"]} ${styles["border_" + border]} ` : [];
    dashed ? classes += `${styles["border_dashed"]} ` : [];
    classes = classes.trim();
    //#endregion

    return ( 
        <div 
            className={classes}
        >
            <div style={{width: "25%", height: "auto", minWidth: "55px"}}>
                <Image src={image} alt={alt} layout="responsive" width={100} height={100}  objectFit="fill"/>
            </div>
            <div>
                <Text color="dark" size="md" bold>{children}</Text>
            </div>
        </div>
     );
}

export default SimpleCard;