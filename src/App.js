import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi,I'm a React App</h1>
          <Person name="Ilya" age="39" />
          <Person name="Alex" age="38" > My hobbies: Cars</Person>
          <Person name="Lena" age="38" />
      </div>
    );
  }
}

export default App;
