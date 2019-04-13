import React from "react";
import ReactDOM from "react-dom";

import css from "./styles.scss";
import Body from "./sections/body";

class App extends React.Component {
  render() {
    return (
      <div className={css.titleContainer}>
        <h1 className={css.title}>Album Viewer</h1>
        <Body />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
