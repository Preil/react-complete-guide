import React, {Component} from 'react';
import classes from'./Person.css'

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <div className={classes.Person}>
                <p>I'm {this.props.name} and I'm {this.props.age}</p>
                <p onClick={this.props.click}>delete</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>

        )
    }
}

export default Person;