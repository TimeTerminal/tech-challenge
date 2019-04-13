import React from "react";
import PropTypes from "prop-types";
import { fetchPhotos } from "../../backend/controllers";

import css from "./styles.scss";
import PhotoViewer from "../PhotoViewer";

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

    this.setState({
      selectedAlbum: {
        albumPhotos: photos
      }
    });
  }

  render() {
    const { albums } = this.props;
    const { title, albumPhotos } = this.state.selectedAlbum;

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
                  <h4 className={css.album__name}>{album.title}</h4>
                </span>
              );
            })}
        </div>
        <PhotoViewer albumPhotos={albumPhotos} />
      </React.Fragment>
    );
  }
}
export default AlbumsList;
