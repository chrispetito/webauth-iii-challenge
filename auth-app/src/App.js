import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import UserList from "./components/UserList";
import SignUp from './components/SignUp'
import NavBar from "./components/NavBar";

class App extends React.Component {
  render() {
  return (
    <div className="App">
    <NavBar />
      <header className='subnav'>
        <nav>
          <NavLink className = 'navlink' to="/login">Login</NavLink>
          <NavLink className = 'navlink' to="/users">Users</NavLink>
          <NavLink className = 'navlink' to='/signup'>Sign Up</NavLink>
          </nav>
          <button className='navbutton' onClick={this.logout}>Log Out</button>

      </header>
      <Route path='/login' component={Login}></Route>
      <Route path='/users' component={UserList}></Route>
      <Route path= '/signup' component={SignUp}></Route>
    </div>
  );
  }

  logout = event => {
    event.preventDefault()
    localStorage.removeItem('jwt')
    this.props.history.push('/login')
  }

}

export default withRouter(App);
