//     *****     Chad[well] Clark 2021     *****     //

import { remoteURL, currUser } from "../components/helpers/Helpers.js";

export const getAllGroups = () => {
  return fetch(`${remoteURL}/groups`).then((response) => response.json());
};

export const getGroupById = (id) => {
  return fetch(`${remoteURL}/groups/${id}`).then((response) => response.json());
};
