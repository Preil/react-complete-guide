import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {id: '1wef' ,name: 'Ilya', age: 39},
            {id: 'sdf1' ,name: 'Lena', age: 38},
            {id: '1sdf' ,name: 'Alex', age: 39}
        ],
        showPersons: false
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p=>{
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        //Alternative:
        // const person_alterantive = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});

    };

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(
                        (person, index) => {
                            return <Person
                                name={person.name}
                                age={person.age}
                                click={() => this.deletePersonHandler(index)}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, person.id)}/>
                        }
                    )}
                </div>
            )
        }
        return (
            <div className="App">
                <button onClick={this.togglePersonsHandler}>Show persons</button>
                {persons}
            </div>
        )
    }
}

export default App;
