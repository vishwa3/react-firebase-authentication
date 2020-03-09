import React from "react";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => {
        return {
          ...usersObject[key],
          uid: key
        };
      });

      this.setState({
        users: usersList,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }
  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <h1>Admin</h1>
        <p>
          The Admin Page is accessible by every signed in user with Admin Role
        </p>
        {loading && <div>Loading...</div>}
        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) =>
  users && (
    <ul>
      {users.map(user => (
        <li key={user.uid}>
          <span style={{ marginRight: 10 }}>
            <strong>ID:</strong>
            {user.uid}
          </span>
          <span style={{ marginRight: 10 }}>
            <strong>E-Mail:</strong>
            {user.email}
          </span>
          <span>
            <strong>Username:</strong>
            {user.username}
          </span>
        </li>
      ))}
    </ul>
  );
/* const condition = authUser => !!authUser; */

/* const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN]; */

let condition = function condition(authUser) {
  return authUser && !!authUser.roles[ROLES.ADMIN];
};

/* export default withAuthorization(condition)(withFirebase(AdminPage)); */

export default compose(withAuthorization(condition), withFirebase)(AdminPage);
