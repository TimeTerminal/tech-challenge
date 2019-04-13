import React from "react";
import PropTypes from "prop-types";
import css from "./styles.scss";
import api from "../../utils/api";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    console.log(this.state, "state");
    return (
      <React.Fragment>
        <h1 className={css.title}>Body</h1>
      </React.Fragment>
    );
  }
}

export default Body;
