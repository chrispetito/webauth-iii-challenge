import React from "react";
import axios from "axios";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div className="form">
        <h1>Login</h1>
        <form className="inputs" onSubmit={this.login}>
          <input
            required
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
          required
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    const endpoint = `http://localhost:4000/api/auth/login`;
    axios
      .post(endpoint, this.state)
      .then(res => {
        if (!this.state.username || !this.state.password) {
          console.log("Error: username and password fields are required");
        } else {
          localStorage.setItem("jwt", res.data.token);
          this.props.history.push("/users");
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
}
