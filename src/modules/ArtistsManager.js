import { remoteURL,currUser, getCurrUser} from "../helpers/Helpers";


export const getUsersArtists =(id) => {
    return fetch(`${remoteURL}/artists`)
    .then(response => response.json())
    .then(artists)
}