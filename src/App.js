import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/user/UserItem";
class App extends Component {


    render() {
        const name = 'Diwakar Shukla';
        const foo = () => 'JD'
        return (
            <div className="App">
                <Navbar />
            <UserItem/>
            </div>
        );

    }
}

export default App;
