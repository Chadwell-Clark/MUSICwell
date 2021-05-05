

export const getJoke = () => {
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
        console.log(parsedResponse);
        return parsedResponse;
      })
  );
};
