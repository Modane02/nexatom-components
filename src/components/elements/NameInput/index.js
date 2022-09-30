import React, { useEffect } from 'react';
import InputField from '../../cores/InputField';

export default function NameInput({setDad}) {
    var variable = undefined;
    const functionF = (value)=>{variable=value; console.log(value); console.log(variable);};
    useEffect(()=>{
        console.log(variable);
        setDad(variable + "Hehe");
    },[variable])
    return ( 
        <InputField value={variable} placeholder="Batata" onChange={functionF}/>
     );
}