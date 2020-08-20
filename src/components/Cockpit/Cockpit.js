import React, {useEffect, useRef} from 'react'
import classes from './Cockpit.css'


const cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(() => {
        toggleBtnRef.current.click();
        console.log('[Cockpit.js] useEffect')
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []);


    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] Clean up work in 2nd useEffect');
        }

    });

    const assignedClasses = [];

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold) // classes = ['red, 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p>{props.personsLength}</p>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle persons</button>

        </div>
    );
};

export default React.memo(cockpit);