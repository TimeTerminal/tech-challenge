import React from "react";
import ReactDOM from "react-dom";

import css from "./styles.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Album Viewer</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
