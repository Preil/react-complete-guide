import React, {Component} from 'react';
import './App.css';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
    state ={
        username: "Lena"
    };

    userNameChanged = (event) =>{
        this.setState({username: event.target.value})
    };
    render() {
        return (
            <div className="App">
                <UserInput
                    changed={this.userNameChanged}
                    currentName={this.state.username} />
                <UserOutput userName='Ilya'/>
                <UserOutput userName={this.state.username}/>
                <UserOutput/>
            </div>
        )
    }
}

export default App;
