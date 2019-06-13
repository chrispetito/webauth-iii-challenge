import React from 'react'

const token = localStorage.getItem('jwt')

export default function(Component) {
    return class Authenticated extends React.Component {
        render() {
            const notLoggedIn = <h1>Please log in to view users</h1>

            return <>{token ? <Component {...this.props} /> : notLoggedIn}</>
        }
    }
}