import React, { useState, useEffect } from "react";

import { currUser, getUserObj } from "../helpers/Helpers.js";
import {
  getUsersWells,
  
} from "../../modules/WellsManager.js";
import {
  getUserArtistById
} from "../../modules/ArtistsManager.js";
import { WellArtistCard } from "./WellArtistCard.js";

//   ***   Get list of artist based on whether the current user ha them in their well

export const UserWell = () => {
  const [user, setUser] = useState();
  const [artists, setArtists] = useState([]);
  const [well, setWell] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const userId = currUser();

  
  const fillWell = (usersArtists) => {
    usersArtists.forEach((artist) => {
      if (artist.artistId !== "") {
        console.log(getUserArtistById(artist.artistId));
        getUserArtistById(artist.artistId)
          .then((artistFromApi) => 
           setWell(prevState => prevState + artistFromApi)         
          )
        }
    });
  };

  const getArtists = () => {
    return getUsersWells(userId)
      .then((artistsFromAPI) => {
        console.log(artistsFromAPI);
        setArtists(artistsFromAPI);
      })
      .then(() => {
        fillWell(artists);
      });
    
  };
  

  const getUser = () => {
    return getUserObj(userId).then((userFromAPI) => {
      console.log(userFromAPI);
      setUser(userFromAPI);
    });
  };

  useEffect(() => {
    getUser()
      .then(() => getArtists())
      // .then(() => setIsLoading(false))
      
  
  return () => {

  }
  }, []);

  return (
    <>
      <div>{`${user?.firstName.toUpperCase()}'s [well]`}</div>
      <div>
          {well
          .map(
              (artist) => 
              <WellArtistCard
              artist={artist}
              key={artist.id}
              />
              )}
          </div>
    </>
  );
};
