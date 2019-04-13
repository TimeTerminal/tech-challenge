import React from "react";
import PropTypes from "prop-types";
import { fetchAllUsers, fetchAlbumsWithArt } from "../../utils/api";

import css from "./styles.scss";
import AlbumsList from "../albumsList";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      selectedUser: null,
      albumData: []
    };

    this.fetchAlbumData = this.fetchAlbumData.bind(this);
  }

  componentDidMount() {
    fetchAllUsers().then(response => {
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
    const albumData = await fetchAlbumsWithArt(userId);
    this.setState({
      albumData
    });
  }

  render() {
    const { albumData } = this.state;
    // console.log(albumData, "albumData in Body");
    return (
      <React.Fragment>
        <h1 className={css.title}>Body</h1>
        <div className={css.users_dropdown}>
          <label>Users:</label>
          <select onChange={e => this.fetchAlbumData(e.target.value)}>
            <option>Select User</option>
            {this.displayUsers()}
          </select>
        </div>
        <AlbumsList albumData={albumData} />
      </React.Fragment>
    );
  }
}

export default Body;
