import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
      </header>
      <h1>Test</h1>
      <Route path='/login' component={Login}></Route>
      <Route path='/users' component={UserList}></Route>
    </div>
  );
}

export default App;
