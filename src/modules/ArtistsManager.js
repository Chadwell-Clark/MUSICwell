//     *****     Chad[well] Clark 2021     *****     //

import {
  remoteURL
  
} from "../components/helpers/Helpers.js";

export const searchArtists = (text) => {
  return fetch(`${remoteURL}/artists?q=${text}`).then((response) =>
    response.json()
  );
};

export const getAllArtists = () => {
  return fetch(`${remoteURL}/artists`).then((response) => response.json());
};

export const getArtistById = (id) => {
  return fetch(`${remoteURL}/artists/${id}`).then((response) =>
    response.json()
  );
};

export const getUsersArtists = (user_id) => {
  return fetch(
    `${remoteURL}/wells/?userId=${user_id}&_expand=artist`
  ).then((response) => response.json());
  // .then(artists => console.log(artists))
};

export const getGroupRelatedArtists = (group_id) => {
  return fetch(
    `${remoteURL}/artists_groups/?groupId=${group_id}&_expand=artist`
  ).then((response) => response.json());
};

export const getAlbumRelatedArtists = (album_id) => {
  return fetch(
    `${remoteURL}/artists_albums/?albumId=${album_id}&_embed=artists`
  ).then((response) => response.json());
};
