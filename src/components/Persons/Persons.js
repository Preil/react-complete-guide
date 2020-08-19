import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
    //
    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps')
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true; // false if react should NOT update component
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount')
    }

    render(){
        return this.props.persons.map((person, index) => {
            console.log('[Persons.js] rendering...');
            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
        });
    }
}
export default Persons;