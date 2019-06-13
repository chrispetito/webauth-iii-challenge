import React from "react";
import axios from "axios";

export default class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
  };
  render() {
    // console.log(this.state)
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form className="inputs" onSubmit={this.signup}>
          <input
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            placeholder="department"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
          />
          <button>Sign Up</button>
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

  signup = event => {
    event.preventDefault();
    const endpoint = `http://localhost:4000/api/auth/register`;
    axios
      .post(endpoint, this.state)
      .then(res => {
        // console.log(res.data)
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/users");
      })
      .catch(err => {
        console.error(err);
      });
  };
}
