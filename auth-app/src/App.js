import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import UserList from "./components/UserList";
import SignUp from './components/SignUp'

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to='/signup'>Sign Up</NavLink>
          <button onClick={this.logout}>Log Out</button>
        </nav>
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
