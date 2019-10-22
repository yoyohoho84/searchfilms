import React, {Component} from 'react';

const InputSearch = (props) => (

    <input className={props.style}
           onChange={props.handler}
           placeholder={props.placeholder}
    >
        {props.btnName}
    </input>
);

export default InputSearch;


