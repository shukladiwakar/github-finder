import React, {Component} from 'react';
import './App.css';

class App extends Component {

    render() {
      const name  = 'Diwakar Shukla';
      const foo = () => 'JD'
        return (
            <div className="App">
                <h1> Hello From { name.toUpperCase() }</h1>
              <h2>Good Bye {foo ()}</h2>
            </div>
        );

    }
}

export default App;
