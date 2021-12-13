import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import axios from 'axios';

export default class login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    loginUser(){
        axios.post('/login_user', {username: this.state.username, password: this.state.password})
            .then((res) => {
                console.log(res);
            })
    }
    
    render() {

        const onChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        const onSubmit = e => {
            e.preventDefault();
            this.loginUser();
        }
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <label>Log in</label>
                    <div>
                        <input required name='username' placeholder="Username" type="text" value={this.state.username} onChange={onChange}/>
                    </div>
                    <div>
                        <input required name='password' placeholder="Password" type="password" value={this.state.password} onChange={onChange}/>
                    </div>
                    <div>
                        <a href="#">Register account</a>
                        <input className='btn btn-primary' value="Log In" type="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}
