import React from "react";
import PropTypes from "prop-types";
import { fetchPhotos } from "../../backend/controllers";

import css from "./styles.scss";

class AlbumsList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedAlbum: {
        title: null,
        albumPhotos: []
      }
    };

    this.selectAlbum = this.selectAlbum.bind(this);
  }

  async selectAlbum(albumId) {
    const photos = await fetchPhotos(albumId);

    console.log(photos, "photos");

    // this.setState({
    //     albumData: {
    //       albums
    //     }
    //   });
  }

  render() {
    const { albums } = this.props;
    const { title, albumPhotos } = this.state.selectedAlbum;
    // console.log(photos, "albumData in AlbumsList");

    // const selectedPhotos = photos.filter(photo => photo.)
    return (
      <React.Fragment>
        <div className={css.albums_list}>
          <h2 className={css.section__title}>Albums</h2>
          {albums.length !== 0 &&
            albums.map(album => {
              return (
                <span
                  key={album.id}
                  className={css.album}
                  onClick={() => this.selectAlbum(album.id)}
                >
                  <h4 className={css.album__title}>{album.title}</h4>
                </span>
              );
            })}
        </div>
        <div className={css.photos_list}>
          <h2 className={css.section__title}>Photos</h2>
          {/* {title !== null &&
            photos.map(photo => {
              return (
                <span key={photo.id} className={css.photo}>
                  <h4 className={css.photo__title}>{album.title}</h4>
                </span>
              );
            })} */}
        </div>
      </React.Fragment>
    );
  }
}
export default AlbumsList;
