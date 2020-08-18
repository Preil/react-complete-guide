import React from 'react';
import Radium from 'radium';
import classes from'./Person.css'

const person = (props) => {
    console.log('[Person.js] rendering...')
    return (
        <div className={classes.Person}>
            <p>I'm {props.name} and I'm {props.age}</p>
            <p onClick={props.click}>delete</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    )
};

export default Radium(person);