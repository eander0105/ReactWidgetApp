import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Cookies from 'js-cookie';
import React, { Component } from 'react'
import axios from 'axios';
import LoggedIn from './component/LoggedIn';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      register: false,
      authenticated: !!Cookies.get('userid')
    };
  }

  

  loginUser(username, password){
    axios.post('/login_user', {username: username, password: password})
        .then((res) => {             
            Cookies.set('userid', res.data.id, {sameSite: 'None', secure: true});
            Cookies.set('username', res.data.username, {sameSite: 'None', secure: true});
            Cookies.set('userfn', res.data.firstname, {sameSite: 'None', secure: true});
            Cookies.set('userln', res.data.lastname, {sameSite: 'None', secure: true});
            
            this.setState({
              'authenticated': true
            })
            console.log(this.state)
            // this.state.authenticated = true;
        })
  }

  render() {
    const onRegisterClick = () => {
      this.setState({
        'register': !this.state.register
      });
    }  
    
    const loginUser = (username, password) => {
      axios.post('/login_user', {username: username, password: password})
          .then((res) => {             
              Cookies.set('userid', res.data.id, {sameSite: 'None', secure: true});
              Cookies.set('username', res.data.username, {sameSite: 'None', secure: true});
              Cookies.set('userfn', res.data.firstname, {sameSite: 'None', secure: true});
              Cookies.set('userln', res.data.lastname, {sameSite: 'None', secure: true});
              
              this.setState({
                'authenticated': true
              })
              console.log(this.state)
              // this.state.authenticated = true;
          })
    }

    const logOut = () => {
      Cookies.remove('userid');
      Cookies.remove('username');
      Cookies.remove('userfn');
      Cookies.remove('userln');
      
      console.log('test')
      this.setState({
        'authenticated': false
      })
    }

    const registerUser = (uname, fname, lname, pw, repw) => {
      axios.post('/register_user', {username: uname, firstname: fname,
      lastname: lname, password: pw, repassword: repw})
      .then((res) => {
          console.log(res)
          this.setState({
            'register': false
          })
      })    
    }

    const backRegister = () => {
      this.setState({
        'register': false
      })
    }

    return (
      <div className="App">
        <main className="App-header">
          {this.state.authenticated ? 
            <LoggedIn logOut={logOut}/> : this.state.register ? 
              <Register registerUser={registerUser} backRegister={backRegister}/> : <Login loginUser={loginUser} onRegisterClick={onRegisterClick}/>}
        </main>
      </div>
    );
  }
}
