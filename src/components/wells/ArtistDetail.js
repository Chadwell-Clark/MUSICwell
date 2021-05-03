import React, { useState, useEffect } from "react";
import { getArtistById } from "../../modules/ArtistsManager.js";
import {useParams, useHistory} from "react-router-dom"
import { currUser, getUserObj } from "../helpers/Helpers.js";


export const ArtistDetail = () => {
    const[artist, setArtist] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    console.log("Artist detail is loaded")
    const {artistId} = useParams();
    const history = useHistory();
    console.log(artistId)

    useEffect(() => {
       getArtistById(artistId)
       .then((a) => {
           setArtist(a)
           setIsLoading(false)
       })
    }, [])

    window.scroll(0,0)

    return (
      <>
        <section>
          {console.log("artistId",artistId)}
          <img src={artist?.imageURL} alt={artist?.name} />
          <div>{artist?.name}</div>
          <div>{artist?.blurb}</div>
          <div>{artist?.roles}</div>
          <a href={artist?.infoURL}>{artist?.infoURL}</a>
        </section>
      </>
    );
};
