import React, { Component } from 'react'
import axios from 'axios'

export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            repassword: ''
        }
    }

    registerUser(){
        axios.post('/register_user', {username: this.state.username, firstname: this.state.firstname,
        lastname: this.state.lastname, password: this.state.password, repassword: this.state.repassword})
        .then((res) => {
            console.log(res)
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
            this.registerUser();
        }
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <label >Register</label>
                    <div>
                        <input name='username' type="text" placeholder='Username' value={this.state.username} onChange={onChange}/>
                    </div>
                    <div>
                        <input name='firstname' type="text" placeholder='Firstname' value={this.state.firstname} onChange={onChange}/>
                    </div>
                    <div>
                        <input name='lastname' type="text" placeholder='Lastname' value={this.state.lastname} onChange={onChange}/>
                    </div>
                    <div>
                        <input name='password' type="password" placeholder='Password' value={this.state.password} onChange={onChange}/>
                    </div>
                    <div>
                        <input name='repassword' type="password" placeholder='Re-enter password' value={this.state.repassword} onChange={onChange}/>
                    </div>
                    <div>
                        <input className='btn btn-primary' type="submit" value='Register'/>
                    </div>
                </form>
            </div>
        )
    }
}
