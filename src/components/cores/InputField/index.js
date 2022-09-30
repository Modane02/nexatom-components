import React, { useRef } from 'react';
import styles from './InputField.styles.module.scss';

export default function InputField({name, type, value, placeholder, onChange, required, disabled, ...rest}) {
    
    const inputRef = useRef(null);

    const handleValue = (event) => {onChange(event.target.value);}
    
    return ( 
        <input 
            type={type} 
            name={name}    
            ref={inputRef} 
            placeholder={placeholder}
            value={value}
            onChange={handleValue}
            required={required}
            aria-disabled={disabled}
            disabled={disabled}
            {...rest}
        />
     );
}