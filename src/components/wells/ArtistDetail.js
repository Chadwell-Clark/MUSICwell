//     *****     Chad[well] Clark 2021     *****     //

import React, { useState, useEffect } from "react";
import { getArtistById } from "../../modules/ArtistsManager.js";
import { useParams, useHistory } from "react-router-dom";
import { currUser, getUserObj } from "../helpers/Helpers.js";

export const ArtistDetail = () => {
  const [artist, setArtist] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log("Artist detail is loaded");
  const { artistId } = useParams();
  const history = useHistory();
  console.log(artistId);

  useEffect(() => {
    getArtistById(artistId).then((a) => {
      setArtist(a);
      setIsLoading(false);
    });
  }, []);

  window.scroll(0, 0);

  //add buttons based on:
  //        1.who the current user is  (current user)
  //            and
  //        2.whether the artist exist in their well
  //        if currUser === logged in user && artistId is in logged in user's well
  //                   show comments and edit and remove buttons
  //                    then show related artist links
  //         if currUser !== logged in user || artist is not in user's well
  //                     show comments and add artist button
  //                     then show related artist links
  //        Functionality:
  //               Add artist to well
  //               remove artist from well(passed from parent?)
  //                edit artist comments
  //

  return (
    <>
      <section>
        {console.log("artistId", artistId)}
        <img src={artist?.imageURL} alt={artist?.name} />
        <div>{artist?.name}</div>
        <div>{artist?.blurb}</div>
        <div>{artist?.roles}</div>
        <a href={artist?.infoURL}>{artist?.infoURL}</a>
      </section>
    </>
  );
};
