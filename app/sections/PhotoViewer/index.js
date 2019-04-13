import React from "react";
import PropTypes from "prop-types";

import css from "./styles.scss";
import Card from "./Card";

class PhotoViewer extends React.Component {
  render() {
    const { albumPhotos } = this.props;

    return (
      <div className={css.photos_container}>
        <h2 className={css.section__title}>Photos</h2>
        {albumPhotos.length !== 0 && (
          <div className={css.cards_slider}>
            <div className={css.cards_slider_wrapper}>
              {albumPhotos.map(photo => {
                return (
                  <Card
                    key={photo.id}
                    imageSource={photo.url}
                    imageTitle={photo.title}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default PhotoViewer;
