import React from "react";
import PropTypes from "prop-types";

import css from "./styles.scss";
import Title from "../../sharedComponents/title";
import Card from "./Card";

class PhotoViewer extends React.Component {
  render() {
    const { title, albumPhotos } = this.props;

    return (
      <div className={css.photos_container}>
        {albumPhotos.length !== 0 && (
          <React.Fragment>
            <Title title={title} />
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
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default PhotoViewer;
