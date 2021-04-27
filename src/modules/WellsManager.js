import {
  remoteURL,
  currUser,
  
} from "../components/helpers/Helpers.js";

export const getUsersWells = (id) => {
  return fetch(
    `${remoteURL}/wells/?userId=${id}&_expand=artist`
  ).then((response) => response.json());
  // .then(artists => console.log(artists))
};
