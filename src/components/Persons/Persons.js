import React from 'react'
import Person from './Person/Person'

const persons = (props) => {
    return props.persons.map((person, index) => {
        console.log('[Persons.js] rendering...');
        return <Person
            name={person.name}
            age={person.age}
            click={() => props.clicked(index)}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}/>
    });
}
export default persons;