import React, {Component} from 'react';
import classes from './App.css';
import Navigation from '../components/Navigation/Navigation'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');

        // In earlier versions here we do state initialization
        // this.state = {} - like this
    }


    state = {
        persons: [
            {id: '1wef', name: 'Ilya', age: '39'},
            {id: 'sdf1', name: 'Lena', age: 38},
            {id: '1sdf', name: 'Alex', age: 39}
        ],
        showPersons: false,
        changeCounter: 0
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props)
        return state; // here we return updated state
    }


    componentDidMount() {
        console.log('[App.js] componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentsUpdate');
        console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }


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

        // better way to update state based on previous state:
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter+1
            }
        });

    };

    render() {
        console.log('[App.js] render()');

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
                <Navigation/>
                <Cockpit title={this.props.appTitle}
                         showPersons={this.state.showPersons}
                         personsLength={this.state.persons.length}
                         clicked={this.togglePersonsHandler}/>
                {persons}
                <p></p>
            </div>

        )
    }
}

export default App;
