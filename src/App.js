import React, {Component} from 'react';
import './App.css';
import Radium from 'radium'

import Person from './Person/Person'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import Char from './Char/Char'


class App extends Component {
    state = {
        persons: [
            {id: '1wef', name: 'Ilya', age: 39},
            {id: 'sdf1', name: 'Lena', age: 38},
            {id: '1sdf', name: 'Alex', age: 39}
        ],
        showPersons: false,
        userInput: ''
    };

    inputChangedHandler = (event) => {
        this.setState({userInput: event.target.value});
        console.log(event.target.value)
    };

    deleteCharacter = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedInput = text.join('');
        this.setState({userInput: updatedInput})
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

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

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
            style.backgroundColor='red'
            style[':hover']={
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        const classes=[];

        if (this.state.persons.length <= 2){
            classes.push('red'); // classes = ['red']
        }
        if (this.state.persons.length <=1){
            classes.push('bold') // classes = ['red, 'bold']
        }


        let charList = this.state.userInput.split('').map((ch, index) => {
            return <Char ch={ch} key={index} click={()=>this.deleteCharacter(index)} />
        });

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working</p>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle persons</button>
                {persons}
                <p></p>
                <input type="text" onChange={(event) => this.inputChangedHandler(event)} value={this.state.userInput}/>
                <ValidationComponent userInputLength={this.state.userInput.length}/>
                {charList}
            </div>
        )
    }
}

export default Radium(App);
