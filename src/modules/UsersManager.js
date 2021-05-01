import { remoteURL } from "../components/helpers/Helpers.js"
// import { remoteUrl } from "../helpers/Helpers.js"


export const getAllUsers = () => {
  return fetch(`${remoteURL}/users`)
  .then((response) => response.json());
};

export const getUser = (id) => {
    return fetch(`${remoteURL}/users/${id}`)
    .then((response) => response.json())
}