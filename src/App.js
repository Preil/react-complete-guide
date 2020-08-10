import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Ilya', age: 39},
            {name: 'Alex', age: 38},
            {name: 'Ilya', age: 37},
        ],
        // otherState: 'Some other value'

    });

    // Notice that switchNameHandler changes state,
    // but it erases otherState while setPersonState applied.
    // Does not merge the old state and new state

    //better way is to use several useState:
    const [otherState, setOtherState] = useState('Some other value');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: 'Ilya', age: 29},
                {name: 'Alex', age: 28},
                {name: 'Ilya', age: 27},
            ]
        })
    };

    return (
        <div className="App">
            <h1>Hi,I'm a React App</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
                My hobby is cars.
            </Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
}

export default app;
