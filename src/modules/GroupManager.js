//     *****     Chad[well] Clark 2021     *****     //

import { remoteURL } from "../components/helpers/Helpers.js";

export const getAllGroups = () => {
  return fetch(`${remoteURL}/groups`)
  .then((response) => response.json());
};

export const getGroupById = (id) => {
  return fetch(`${remoteURL}/groups/${id}`)
  .then((response) => response.json());
};

export const getGroupsByArtistId = (artistId) => {
  return fetch(`${remoteURL}/artists_groups/?artistId=${artistId}`)
  .then((response) => response.json());
};



// export const getRelatedArtistsByGroup = (artistId) => {
//   let relatedArtists = [];
//   let groupsArray = []
//   return fetch(`${remoteURL}/artists_groups/?artistId=${artistId}`)
//     .then((response) => response.json())
//   .then(groups => {
//     groupsArray.map(item => {

//     })
//   })
 
// };