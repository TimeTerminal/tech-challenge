const { fetchAllUsers, fetchUsersAlbums, fetchAlbumPhotos } = require("./db");

const pathRoot = "https://jsonplaceholder.typicode.com";

export async function fetchUserData() {
  const userData = await fetchAllUsers(`${pathRoot}/users`);
  return userData;
}

export async function fetchAlbums(userId) {
  try {
    const albums = await fetchUsersAlbums(`${pathRoot}/albums`, userId);
    return albums;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchPhotos(albumId) {
  try {
    const photos = await fetchAlbumPhotos(`${pathRoot}/photos`, albumId);
    return photos;
  } catch (error) {
    console.error(error);
  }
}
