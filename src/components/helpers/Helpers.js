
export const remoteURL = "http://localhost:8088"

 export const currUser =  +sessionStorage.getItem("musicwell_userId")


export const getCurrUser = (currUser) => {
    return fetch (`${remoteURL}/users/${currUser}`)
    .then(response => response.json);
}