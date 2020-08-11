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
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.togglePersonsHandler}>Show persons</button>
                {this.state.showPersons ?
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}/>
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}/>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}/>
                    </div> : null
                }
            </div>
        )
    }
}

export default App;
