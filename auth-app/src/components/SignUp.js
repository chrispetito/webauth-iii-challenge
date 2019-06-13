import React from 'react'
import axios from 'axios'

export default class SignUp extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            department: ''
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={this.signup}>
                    <input placeholder='username' name='username' value={this.state.credentials.username} onChange={this.handleChange}></input>
                    <input placeholder='password' name='password' value={this.state.credentials.password} onChange={this.handleChange}></input>
                    <input placeholder='department' name='department' value={this.state.credentials.department} onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }

    handleChange = event => {
        this.setState({ 
            ...this.state,
            [event.target.name]:event.target.value
        })
    }

    signup = event => {
        event.preventDefault()
        const endpoint = `http://localhost:4000/api/auth/register`
        axios.post(endpoint, this.state).then(res => {
            console.log(res.data)
            localStorage.setItem('jwt', res.data.token)
            this.props.history.push('/users')
        })
        .catch(err => {
            console.error(err)
        })
    }
}