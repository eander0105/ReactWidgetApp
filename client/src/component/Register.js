import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <label >Register</label>
                    <div>
                        <input type="text" placeholder='Username'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Firstname'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Lastname'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Password'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Re-enter password'/>
                    </div>
                    <div>
                        <input type="submit" value='Register'/>
                    </div>
                </form>
            </div>
        )
    }
}
