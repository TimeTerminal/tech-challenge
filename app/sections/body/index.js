import React from "react";
import PropTypes from "prop-types";
import css from "./styles.scss";
import api from "../../utils/api";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      selectedUser: null
    };
  }

  componentDidMount() {
    api.fetchAllUsers().then(response => {
      this.setState({
        users: response
      });
    });
  }

  displayUsers() {
    const { users } = this.state;
    if (users.length === 0) {
      return <option disabled>Loading Users...</option>;
    } else {
      return users.map(user => {
        return (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        );
      });
    }
  }

  fetchAlbums(userId) {
  }

  render() {
    console.log(this.state, "state");
    return (
      <React.Fragment>
        <h1 className={css.title}>Body</h1>
        <div className={"css.users-dropdown"}>
          <label>Users:</label>
          <select onChange={e => this.fetchAlbums(e.target.value)}>
            <option>Select User</option>
            {this.displayUsers()}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
