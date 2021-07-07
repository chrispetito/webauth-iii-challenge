import React from "react";
import axios from "axios";

import requireAuth from "../auth/requireAuth";
import '../auth/axiosInterceptor'

class UserList extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <div>
        <h2>User List</h2>

          {this.state.users.map(user => {
            return <h4 className='user-name' key={user.id}>{user.username}</h4>;
          })}
      </div>
    );
  }

  componentDidMount() {
    const endpoint = `http://localhost:4000/api/users`;
    axios
      .get(endpoint)
      .then(res => {
        console.log(res.data);
        this.setState(() => ({ users: res.data}));
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export default requireAuth(UserList);
