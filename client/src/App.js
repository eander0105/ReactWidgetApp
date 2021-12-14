import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './component/Login';
import Register from './component/Register';

// function App() {
  
// }

// export default App;
import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      register: false
    };
  }

  render() {
    const onRegisterClick = () => {
      this.setState({
        'register': !this.state.register
      });
    }  
    
    return (
      <div className="App">
        <main className="App-header">
          {this.state.register ? !this.state.register ? 'false' : 'true' : <Login onRegisterClick={onRegisterClick}/>}
        </main>
      </div>
    );
  }
}
