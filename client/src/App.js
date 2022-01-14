import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Cookies from 'js-cookie';
import React, { Component } from 'react'
import axios from 'axios';
import Desktop from './component/Desktop';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      register: false,
      authenticated: !!Cookies.get('userid'),
      loginError: '',
      registerError: ''
    }
  }

  render() {
    const onRegisterClick = () => {
      this.setState({
        'register': !this.state.register,
        registerError: '',
        loginError: ''
      });
    }  
    
    const loginUser = (username, password) => {
      axios.post('/login_user', {username: username, password: password})
          .then((res) => {
            if(res.data.authenticated){
              Cookies.set('userid', res.data.id, {sameSite: 'None', secure: true});
              Cookies.set('username', res.data.username, {sameSite: 'None', secure: true});
              Cookies.set('userfn', res.data.firstname, {sameSite: 'None', secure: true});
              Cookies.set('userln', res.data.lastname, {sameSite: 'None', secure: true});
              Cookies.set('usercity', res.data.location.city, {sameSite: 'None', secure: true});
              Cookies.set('userlat', res.data.location.lat, {sameSite: 'None', secure: true});
              Cookies.set('userlng', res.data.location.lng, {sameSite: 'None', secure: true});
              console.log(Cookies.get('userlat'));
              
              this.setState({
                'authenticated': true,
                loginError: ''
              });
              console.log(this.state)
            }
            else{
              this.setState({
                loginError: res.data.error
                });
            }
          });
    }

    const logOut = () => {
      Cookies.remove('userid');
      Cookies.remove('username');
      Cookies.remove('userfn');
      Cookies.remove('userln');
      Cookies.remove('userlocation');
      
      this.setState({
        'authenticated': false
      });
    }

    const registerUser = (uname, fname, lname, pw, repw, city) => {
      axios.post('/register_user', {username: uname, firstname: fname,
      lastname: lname, password: pw, repassword: repw, location: city})
      .then((res) => {
        if(res.data.validated){
          console.log(res);
          this.setState({
            'register': false,
            registerError: ''
          });
        }
        else{
          this.setState({
            registerError: res.data.error
          });
        }
      });    
    }

    const backRegister = () => {
      this.setState({
        'register': false
      });
    }

    return (
      <div className="App">
        <main className="App-header">
          {this.state.authenticated ? 
            <Desktop logOut={logOut}/> : this.state.register ? 
              <Register registerUser={registerUser} backRegister={backRegister} registerError={this.state.registerError}/> : <Login loginUser={loginUser} onRegisterClick={onRegisterClick} loginError={this.state.loginError}/>}
        </main>
      </div>
    );
  }
}
