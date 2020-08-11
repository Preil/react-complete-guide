import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Ilya', age: 39},
            {name: 'Lena', age: 38},
            {name: 'Alex', age: 39}
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
                                key={index}/>
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
