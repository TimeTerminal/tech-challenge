import React from "react";
import css from "./styles.scss";

class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className={css.title}>Body</h1>
      </React.Fragment>
    );
  }
}

export default Body;
