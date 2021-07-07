import React from "react";

const token = localStorage.getItem("jwt");

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const notLoggedIn = (
        <div className="login-error">
          <div className='error-message'>
            <i className="fas fa-exclamation-circle" />
            <h4>Please log in to view users</h4>
          </div>
        </div>
      );

      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
