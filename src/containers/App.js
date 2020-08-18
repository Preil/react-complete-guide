import React, {Component} from 'react';
import classes from './App.css';
import Navigation from '../components/Navigation/Navigation'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'



class App extends Component {
    state = {
        persons: [
            {id: '1wef', name: 'Ilya', age: 39},
            {id: 'sdf1', name: 'Lena', age: 38},
            {id: '1sdf', name: 'Alex', age: 39}
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
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        //Alternative:
        // const person = Object.assign({}, this.state.persons[personIndex]);

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
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}/>
                </div>
            )
        }


        return (

                <div className={classes.App}>
                    <Navigation />
                    <Cockpit
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}/>
                    {persons}
                    <p></p>
                </div>

        )
    }
}

export default App;
