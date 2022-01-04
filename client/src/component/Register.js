import React, { Component } from 'react';
import './css/login.css';

export default class Register extends Component {
    constructor(props){
        super();
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            repassword: ''
        }
    }

    

    render() {
        const onChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
        const onSubmit = e => {
            e.preventDefault();
            this.props.registerUser(this.state.username, this.state.firstname, this.state.lastname,
                this.state.password, this.state.repassword);
        }
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <label >Register</label>
                    <div>
                        <input name='username' type="text" placeholder='Username' value={this.state.username} required onChange={onChange}/>
                    </div>
                    <div>
                        <input name='firstname' type="text" placeholder='Firstname' value={this.state.firstname} required onChange={onChange}/>
                    </div>
                    <div>
                        <input name='lastname' type="text" placeholder='Lastname' value={this.state.lastname} required onChange={onChange}/>
                    </div>
                    <div>
                        <input name='password' type="password" placeholder='Password' value={this.state.password} required onChange={onChange}/>
                    </div>
                    <div>
                        <input name='repassword' type="password" placeholder='Re-enter password' value={this.state.repassword} required onChange={onChange}/>
                    </div>
                    <p id='errorMsg'>
                        {this.props.registerError}
                    </p>
                    <div>
                        <input className='btn btn-primary' type="submit" value='Register'/>
                    </div>
                    <div>
                        <button className='btn btn-primary' onClick={this.props.backRegister}>Back</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}
