import React from 'react'
import axios from 'axios'

export default class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.login}>
                    <input placeholder='username' name='username' value={this.state.username} onChange={this.handleChange}></input>
                    <input placeholder='password' name='password' value={this.state.password} onChange={this.handleChange}></input>
                    <button>Login</button>
                </form>
            </div>
        )
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    login = event => {
        event.preventDefault()
        const endpoint = `http://localhost:4000/api/auth/login`
    }
}