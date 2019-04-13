import React from "react";
import ReactDOM from "react-dom";

import css from "./styles.scss";

class App extends React.Component {
  render() {
    return <div>Album Viewer</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
