const axios = require("axios");

const pathRoot = "https://jsonplaceholder.typicode.com";

module.exports = {
  fetchAllUsers: function() {
    return axios.get(`${pathRoot}/users`).then(response => {
      return response.data;
    });
  },
  fetchAlbumsWithArt: async function(userId) {
    try {
      const albums = await axios
        .get(`${pathRoot}/albums`, {
          params: {
            userId
          }
        })
        .catch(e => {
          console.log(error);
        });

      const fullAlbumData = Promise.all(
        albums.data.map(albumsInfo => {
          return axios
            .get(`${pathRoot}/photos`, {
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
};
