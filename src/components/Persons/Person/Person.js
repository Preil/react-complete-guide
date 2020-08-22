import React, {Component} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }


    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...')
        return (

            <div className={classes.Person}>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                </AuthContext.Consumer>
                <p>I'm {this.props.name} and I'm {this.props.age}</p>
                <p onClick={this.props.click}>delete</p>
                <p>{this.props.children}</p>
                <input
                    //here we can save reference to the current element to a class property
                    // and after we can operate with that reference in component life cycle hooks.
                    ref={this.inputElementRef}
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