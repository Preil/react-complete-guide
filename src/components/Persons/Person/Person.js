import React, {Component} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
    componentDidMount() {
        this.inputElement.focus();
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <div className={classes.Person}>
                <p>I'm {this.props.name} and I'm {this.props.age}</p>
                <p onClick={this.props.click}>delete</p>
                <p>{this.props.children}</p>
                <input
                    //here we can save reference to the current element to a class property
                    // and after we can operate with that reference in component life cycle hooks.
                    ref={(inputEl) => {this.inputElement = inputEl}}
                    type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>

        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;