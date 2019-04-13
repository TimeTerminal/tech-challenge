import React from "react";
import ReactDOM from "react-dom";

import css from "./styles.scss";
import Body from "./sections/Body";

class App extends React.Component {
  render() {
    return (
      <div className={css.main_template}>
        <Body />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
