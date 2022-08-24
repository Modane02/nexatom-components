import Image from 'next/image';
import React from 'react';
import Text from '../../cores/Text';
import styles from './SimpleCard.styles.module.scss';

function SimpleCard({children, border, round, dashed, classes}) {

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
            <Image src="https://segurolight.com.br/img/icons/seg-car-colisao.jpg" alt="alt" layout="responsive" width="40px" height="40px" objectFit="contain"/>
            <Text>{children}</Text>
        </div>
     );
}

export default SimpleCard;