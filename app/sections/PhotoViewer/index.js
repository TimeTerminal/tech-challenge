import React from "react";
import PropTypes from "prop-types";

import css from "./styles.scss";
import Title from "../../sharedComponents/title";
import Card from "./Card";

class PhotoViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPhotoNumber: 1
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.title !== prevProps.title) {
      this.resetPhotos();
    }
  }

  resetPhotos() {
    this.setState({ currentPhotoNumber: 1 });
  }

  shiftPhotos(direction) {
    const { albumPhotos } = this.props;
    const { currentPhotoNumber } = this.state;
    let newIndex = currentPhotoNumber;

    if (direction === "forward") {
      if (newIndex === albumPhotos.length + 1) {
        newIndex = 1;
      } else {
        newIndex = currentPhotoNumber + 1;
      }
    } else {
      if (newIndex === 0) {
        newIndex = albumPhotos.length;
      } else {
        newIndex = currentPhotoNumber - 1;
      }
    }

    this.setState({
      currentPhotoNumber: newIndex
    });
  }

  renderButtons(albumPhotos, currentPhotoNumber) {
    return (
      <div className={css.buttons}>
        <button
          className={css.buttons__button}
          onClick={() => this.shiftPhotos("backward")}
        >
          &lt;
        </button>
        <button
          className={css.buttons__button}
          onClick={() => this.shiftPhotos("forward")}
        >
          &gt;
        </button>
      </div>
    );
  }

  renderCarousel(albumPhotos, currentPhotoNumber) {
    const size = 600;
    return (
      <div className={css.carousel}>
        <div
          className={css.carousel__slider}
          style={{
            transform: `translateX(${-size * currentPhotoNumber}px)`
          }}
        >
          <Card
            id="carousel__lastClone"
            imageSource={albumPhotos[albumPhotos.length - 1].url}
            imageTitle={albumPhotos[albumPhotos.length - 1].title}
          />
          {albumPhotos.map(photo => {
            return (
              <Card
                key={photo.id}
                imageSource={photo.url}
                imageTitle={photo.title}
              />
            );
          })}
          <Card
            id="carousel__firstClone"
            imageSource={albumPhotos[0].url}
            imageTitle={albumPhotos[0].title}
          />
        </div>
      </div>
    );
  }

  render() {
    const { title, albumPhotos } = this.props;
    const { currentPhotoNumber } = this.state;

    return (
      <React.Fragment>
        {albumPhotos.length !== 0 && (
          <div className={css.photos_container}>
            <Title title={title} />
            {/* Buttons */}
            {this.renderButtons(albumPhotos, currentPhotoNumber)}
            {/* Carousel */}
            {this.renderCarousel(albumPhotos, currentPhotoNumber)}
          </div>
        )}
      </React.Fragment>
    );
  }
}

PhotoViewer.propTypes = {
  title: PropTypes.string,
  albumPhotos: PropTypes.array
};

export default PhotoViewer;
