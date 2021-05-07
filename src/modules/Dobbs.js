//     *****     Chad[well] Clark 2021     *****     //

export const getDobbs = () => {
  return (
    fetch("https://icanhazdadjoke.com/", {
      method: "Get",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      //*  BELOW NOT NEEDED if not using parsed data
      .then((parsedResponse) => {
        // console.log(parsedResponse);
        return parsedResponse;
      })
  );
};
