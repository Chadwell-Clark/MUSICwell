//     *****     Chad[well] Clark 2021     *****     //

import { remoteURL} from "../components/helpers/Helpers.js";

export const getAllWells = () => {
  return fetch(
    `${remoteURL}/wells`
  ).then((response) => response.json());
  // .then(artists => console.log(artists))
};

export const getUsersWells = (id) => {
  return fetch(
    `${remoteURL}/wells/?userId=${id}&_expand=artist`
  ).then((response) => response.json());
  // .then(artists => console.log(artists))
};

export const addArtistToWell = (newArtist) => {
    return fetch(`${remoteURL}/wells`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newArtist),
    }).then((response) => response.json());
};

export const editArtistInWell = (editedArtist) => {
    return fetch(
        `${remoteURL}/wells/${editedArtist.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedArtist),
        }
    )
    .then((response) => response.json())
}

export const deleteArtistFromWell = (id) => {
  return fetch(`${remoteURL}/wells/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
};