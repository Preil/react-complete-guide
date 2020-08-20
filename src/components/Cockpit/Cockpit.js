import React, {useEffect} from 'react'
import classes from './Cockpit.css'


const cockpit = (props) => {

        useEffect(() => {
            // This hook executes every state update and every render() cycle
            console.log('[Cockpit.js] useEffect')
            // Can make http request here if needed.
            const timer = setTimeout(() => {
                alert('Saved data to cloud');
            }, 1000);

            // we can add return to have clean up work? after component unmount action
            return ()=>{
                clearTimeout(timer);
                console.log('[Cockpit.js] cleanup work in useEffect')
            }

            // this will start useEffect after persons were changed
        }, []);

        // we can apply useEffect() for different object changes as mny times as needed


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
                <button className={btnClass} onClick={props.clicked}>Toggle persons</button>

            </div>
        );
    }
;

export default React.memo(cockpit);