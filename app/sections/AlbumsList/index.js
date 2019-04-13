import React from "react";
import PropTypes from "prop-types";
import { fetchPhotos } from "../../backend/controllers";

import css from "./styles.scss";
import Title from "../../sharedComponents/title";
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

  async selectAlbum(albumId, title) {
    const photos = await fetchPhotos(albumId);

    this.setState({
      selectedAlbum: {
        title,
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
          <Title title={"Albums"} />
          {albums.length !== 0 &&
            albums.map(album => {
              return (
                <span
                  key={album.id}
                  className={css.album}
                  onClick={() => this.selectAlbum(album.id, album.title)}
                >
                  <p className={css.album__name}>{album.title}</p>
                </span>
              );
            })}
        </div>
        <PhotoViewer title={title} albumPhotos={albumPhotos} />
      </React.Fragment>
    );
  }
}
export default AlbumsList;
