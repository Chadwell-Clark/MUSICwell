//     *****     Chad[well] Clark 2021     *****     //

import React, { useEffect, useState } from "react";
import {
  getUsersArtists,
  searchArtists,
} from "../../modules/ArtistsManager.js";
import { ArtistCard } from "./ArtistCard.js";
import { getUsersWells } from "../../modules/WellsManager.js";
import { currUser, getUserObj } from "../helpers/Helpers.js";
import "./Search.css";

export const SearchList = ({ searchInputText }) => {
  //   *Take text >>  query to table that returns array of objects >> based off a real search

  const [searchResult, setSearchResult] = useState("");
  const [userWells, setUserWells] = useState([]);

  const userId = currUser();

  console.log("result", searchResult);

  // const getArtists = () => {
  //   return getUsersWells(userId).then((artistsFromAPI) => {
  //     console.log(artistsFromAPI);
  //     setUserWells(artistsFromAPI);
  //     console.log("AL!",userWells);
  //     // fillWell(artistsList);
  //     return artistsFromAPI;
  //   });
  // };

  useEffect(() => {
    searchArtists(searchInputText).then((r) => setSearchResult(r));
  }, [searchInputText]);

  useEffect(() => {
    getUsersWells(userId).then((artistsFromAPI) =>
      setUserWells(artistsFromAPI)
    );
  }, []);

  // useEffect(() => {
  //     getUsersWells(userId).then((artistsFromAPI) => {
  //     console.log(artistsFromAPI);
  //     setUserWells(artistsFromAPI);
  //     }
  // //   getArtists();
  // }, []);
  console.log("userWells", userWells);
  if (searchResult.length > 0) {
    return (
      <>
        <div>
          <div>Artist Search Results</div>
          <div>
            {searchResult.map((artist) => (
              <ArtistCard
                artist={artist}
                userWells={userWells}
                key={artist.id}
              />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <div className="empty-search">
            These are not the droids you are seaching for
          </div>
        </div>
      </>
    );
  }
};
