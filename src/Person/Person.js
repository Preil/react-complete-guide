import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p>I'm {props.name} and I'm {props.age}</p>
            <p onClick={props.click}>delete</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    )
};

export default person;