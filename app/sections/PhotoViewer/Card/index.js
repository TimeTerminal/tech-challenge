import React from "react";
import PropTypes from "prop-types";

import css from "./styles.scss";

class Card extends React.Component {
  render() {
    const { imageSource, imageTitle } = this.props;
    // console.log(imageSource, imageTitle, "albumPhotos in Card");

    return (
      <div className={css.card}>
        <h2 className={css.card__title}>{imageTitle}</h2>
        <img src={imageSource} className={css.card__background} />
      </div>
    );
  }
}
export default Card;
