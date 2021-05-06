//     *****     Chad[well] Clark 2021     *****     //

import React, { useState, useEffect } from "react";
import { currUser, getUserObj } from "../helpers/Helpers.js";
import { getUsersWells } from "../../modules/WellsManager.js";
import { getArtistById } from "../../modules/ArtistsManager.js";
import { WellArtistCard } from "../wells/WellArtistCard.js";
import "../wells/UserWellList.css";
import { useParams } from "react-router-dom";

//   ***   Get list of artist based on whether the user ha them in their well
export const YonderWell = () => {
  const [user, setUser] = useState();
  const [artistsList, setArtistsList] = useState([]);
  const [well, setWell] = useState([]);

  const { userId } = useParams();
  // console.log("userId", userId);

  const fillWell = (usersArtists) => {
    // console.log("usersArtist", usersArtists);
    const newArr = usersArtists.filter((artist) => {
      return artist.artistId !== "";
    });
    // console.log("newArr", newArr);
    Promise.all(
      newArr.map((singleArtist) => getArtistById(singleArtist.artistId))
    ).then((returned) => setWell(returned));
  };

  const getArtists = () => {
    return getUsersWells(userId).then((artistsFromAPI) => {
      // console.log(artistsFromAPI);
      setArtistsList(artistsFromAPI);
      // console.log("AL!", artistsList);
      // fillWell(artistsList);
      return artistsFromAPI;
    });
  };

  const getUser = () => {
    return getUserObj(userId).then((userFromAPI) => {
      // console.log(userFromAPI);
      setUser(userFromAPI);
    });
  };

  useEffect(() => {
    if (artistsList.length > 0) {
      fillWell(artistsList);
    }
  }, [artistsList]);

  useEffect(() => {
    //   getUserId()
    getUser().then(() => getArtists());

    // .then(() => setIsLoading(false))
  }, [userId]);

  window.scroll(0, 0);

  return (
    <>
      <div className="appview-overflow">
        <div className="well_owner">{`${user?.firstName?.toUpperCase()}'s Yonder [well]`}</div>
        <div>
          {/* {console.log("comm", artistsList)} */}
          {/* {console.log("well", well)} */}
          {well.map((artist) => (
            <WellArtistCard
              artist={artist}
              artistsList={artistsList}
              key={artist.id}
              userId={userId}
            />
          ))}
        </div>
      </div>
    </>
  );
};
