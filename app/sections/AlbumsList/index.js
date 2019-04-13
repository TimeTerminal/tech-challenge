import React from "react";
import PropTypes from "prop-types";

import css from "./styles.scss";

class AlbumsList extends React.Component {
  render() {
    const { albums } = this.props.albumData;
    return (
      <React.Fragment>
        {albums.length !== 0 && (
          <div className={css.albums_container}>
            {albums.map((album, index) => {
              return (
                <span key={index} className={css.album__container} />
                // <span key={album.id}>
                //   <h4 className={css.album__title}>{album.title}</h4>;
                // </span>;
              );
            })}
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default AlbumsList;
