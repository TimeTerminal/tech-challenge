const axios = require("axios");

export function fetchAllUsers(path) {
  return axios
    .get(path)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

export async function fetchUsersAlbums(path, userId) {
  const albums = await axios
    .get(path, {
      params: {
        userId
      }
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
  return albums;
}

export async function fetchAlbumPhotos(path, albums) {
  try {
    const fullAlbumData = Promise.all(
      albums.map(albumsInfo => {
        return axios
          .get(path, {
            params: {
              albumId: albumsInfo.id
            }
          })
          .catch(e => {
            console.log(error);
          });
      })
    ).then(albumImages => {
      return albumImages.map(albumImage => albumImage.data);
    });

    return fullAlbumData;
  } catch (error) {
    console.error(error);
  }
}
