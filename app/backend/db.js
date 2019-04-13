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

export async function fetchAlbumPhotos(path, albumId) {
  const photos = axios
    .get(path, {
      params: {
        albumId
      }
    })
    .catch(e => {
      console.log(error);
    })
    .then(response => {
      return response.data;
    });

  return photos;
}
