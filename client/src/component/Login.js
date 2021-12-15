import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

export default class login extends Component {
    constructor(props){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

   
    
    render() {

        const onChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        const onSubmit = e => {
            e.preventDefault();
            this.props.loginUser(this.state.username, this.state.password);
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
                        <a onClick={this.props.onRegisterClick} href='#'>Register account</a>
                        <input className='btn btn-primary' value="Log In" type="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}
