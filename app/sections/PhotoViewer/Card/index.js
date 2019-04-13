import React from "react";
import PropTypes from "prop-types";

import css from "./styles.scss";

class Card extends React.PureComponent {
  render() {
    const { imageSource, imageTitle } = this.props;
    // console.log(imageSource, imageTitle, "albumPhotos in Card");

    return (
      <div className={css.card}>
        <img src={imageSource} className={css.card__background} />
        <h2 className={css.card__title}>{imageTitle}</h2>
      </div>
    );
  }
}
export default Card;
