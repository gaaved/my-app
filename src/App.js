import React from 'react';
import Form from './Form';
import './App.css';


const App = () => {

    return (
        <div className="App">
            <header className="App-header">
                <h4>Welcome to Test App</h4>
                <Form />
            </header>
            <div id="detail"></div>
        </div>
    );
}

export default App;