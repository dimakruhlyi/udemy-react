import React from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';

export default class Auth extends React.Component {
    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }

    render(){
        return(
            <div className = {classes.Auth}>
                <div>
                    <h1>Authorization</h1>

                    <form onSubmit = {this.submitHandler} className = {classes.AuthForm}>
                        <input type="text"/>
                        <input type="text"/>
                        <Button type = "success" onClick = {this.loginHandler}>Log in</Button>
                        <Button type = "primary" onClick = {this.registerHandler}>Register</Button>
                    </form>
                </div>
            </div>
        )
    }
}
