import { remoteURL, currUser, getCurrUser} from "../components/helpers/Helpers.js";

export const getUserArtistById = (id) => {
    return fetch(`${remoteURL}/artists/${id}`)
    .then(response => response.json())
}

export const getUsersArtists =(id) => {
    return fetch(`${remoteURL}/wells/?userId=${id}&_expand=artist`)
    .then(response => response.json())
    // .then(artists => console.log(artists))
}
