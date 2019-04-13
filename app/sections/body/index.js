import React from "react";
import { fetchUserData, fetchAlbums } from "../../backend/controllers";

import css from "./styles.scss";
import AlbumsList from "../AlbumsList";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      albums: []
    };

    this.fetchAlbumData = this.fetchAlbumData.bind(this);
  }

  componentDidMount() {
    fetchUserData().then(response => {
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

  async fetchAlbumData(userId) {
    const albums = await fetchAlbums(userId);
    this.setState({ albums });
  }

  render() {
    const { albums } = this.state;
    return (
      <React.Fragment>
        <div className={css.users_dropdown}>
          <label>Users:</label>
          <select onChange={e => this.fetchAlbumData(e.target.value)}>
            <option>Select User</option>
            {this.displayUsers()}
          </select>
        </div>
        <AlbumsList albums={albums} />
      </React.Fragment>
    );
  }
}

export default Body;
