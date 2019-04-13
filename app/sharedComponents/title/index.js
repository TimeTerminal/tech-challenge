import React from "react";
import PropTypes from "prop-types";

import css from "./styles.scss";

class Title extends React.PureComponent {
  render() {
    const { title } = this.props;
    return <h2 className={css.section__title}>{title}</h2>;
  }
}

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
