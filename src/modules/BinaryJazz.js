//     *****     Chad[well] Clark 2021     *****     //

export const getBinaryJazz = () => {
  return fetch(
    `https://binaryjazz.us/wp-json/genrenator/v1/story/1`
  ).then((response) => response.json());
};
