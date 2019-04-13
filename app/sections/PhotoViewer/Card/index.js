import React from "react";
import PropTypes from "prop-types";

import css from "./styles.scss";

class Card extends React.PureComponent {
  render() {
    const { imageSource, imageTitle } = this.props;
    return (
      <div className={css.card}>
        <img src={imageSource} className={css.card__background} />
        <h2 className={css.card__title}>{imageTitle}</h2>
      </div>
    );
  }
}

Card.propTypes = {
  imageSource: PropTypes.string,
  imageTitle: PropTypes.string
};

export default Card;
