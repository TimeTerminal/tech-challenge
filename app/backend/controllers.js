const { fetchAllUsers, fetchUsersAlbums, fetchAlbumPhotos } = require("./db");

const pathRoot = "https://jsonplaceholder.typicode.com";

async function fetchUserData() {
  const userData = await fetchAllUsers(`${pathRoot}/users`);
  return userData;
}

async function fetchAlbumsWithPhotos(userId) {
  try {
    const albums = await fetchUsersAlbums(`${pathRoot}/albums`, userId);
    const allData = await fetchAlbumPhotos(`${pathRoot}/photos`, albums);
    return [albums, allData];
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  fetchUserData,
  fetchAlbumsWithPhotos
};
