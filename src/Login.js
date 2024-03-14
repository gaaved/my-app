import React from 'react';
import Form from './Form';
import './Style.css';


const Login = () => {

    return (
        <div className="Login">
            <header className="Login-header">
                <h4>Welcome to Test App</h4>
                <Form />
            </header>
        </div>
    );
}

export default Login;