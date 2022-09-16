import React, { useEffect, useRef, useState } from 'react';

export default function InputField({name, dadValue,...rest}) {
    
    const inputRef = useRef(null);
    const [value, setValue] = useState();

    const handleValue = (event) => {setValue(event.target.value)}

    useEffect(() => {
        dadValue(value);
    }, [value])
    
    return ( 
        <input type="text" ref={inputRef} onChange={handleValue}/>
     );
}