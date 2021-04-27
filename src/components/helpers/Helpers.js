
export const remoteURL = "http://localhost:8088"

export const currUser = () =>  {
    return +(sessionStorage.getItem("musicwell_userId"))
}


export const getUserObj = (id) => {
    return fetch(`${remoteURL}/users/${id}`)
    .then(response => response.json());
}