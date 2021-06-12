import React from 'react';
import './input.css';


export default ({id, type, placeholder, value}) => (
    <>
        <input id={id} type={type} placeholder={placeholder} value={value} />
    </>
);