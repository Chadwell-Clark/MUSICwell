import React, { useState, useEffect } from "react";

import { currUser, getUserObj } from "../helpers/Helpers.js";
import { getUsersWells } from "../../modules/WellsManager.js";
import { getUserArtistById } from "../../modules/ArtistsManager.js";
import { WellArtistCard } from "./WellArtistCard.js";
import "./UserWell.css";


//   ***   Get list of artist based on whether the current user ha them in their well

export const UserWell = () => {
  const [user, setUser] = useState();
  const [artistsList, setArtistsList] = useState([]);
  const [well, setWell] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const userId = currUser();

  
  const fillWell = (usersArtists) => {
    // console.log("usersArtist", usersArtists);
    const newArr = usersArtists.filter((artist) => {
      return artist.artistId !== "";
    });
    // console.log("newArr", newArr);
    const urlArr = newArr.map((singleArtist) =>
      getUserArtistById(singleArtist.artistId)
    );
    Promise.all(urlArr).then((returned) => setWell(returned));
  };

  const getArtists = () => {
    return getUsersWells(userId).then((artistsFromAPI) => {
      console.log(artistsFromAPI);
      setArtistsList(artistsFromAPI);
      // console.log("AL!",artistsList);
      // fillWell(artistsList);
      return artistsFromAPI;
    });
    //   .then(() => {
    //       console.log("AL", artistsList)
    //   });
  };

  const getUser = () => {
    return getUserObj(userId).then((userFromAPI) => {
      console.log(userFromAPI);
      setUser(userFromAPI);
    });
  };

  useEffect(() => {
    if (artistsList.length > 0) {
      fillWell(artistsList);
    }
  }, [artistsList]);

  useEffect(() => {
    getUser()
    .then(() => getArtists());
    
    // .then(() => setIsLoading(false))
  }, []);

  return (
    <>
      <div className="well_owner">{`${user?.firstName.toUpperCase()}'s [well]`}</div>
      <div>
        {console.log("comm", artistsList)}
        {console.log("well", well)}
        {well.map((artist) => (
          <WellArtistCard artist={artist} artistsList={artistsList} key={artist.id} />
        ))}
      </div>
    </>
  );
};
