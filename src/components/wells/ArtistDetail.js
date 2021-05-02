import React, { useState, useEffect } from "react";
import { getArtistById } from "../../modules/ArtistsManager.js";
import {useParams, useHistory} from "react-router-dom"


export const ArtistDetail = () => {
    const[artist, setArtist] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const {artistId} = useParams();
    const history = useHistory();

    useEffect(() => {
       getArtistById(artistId)
       .then((a) => {
           setArtist(a)
           setIsLoading(false)
       })
    }, [artistId])

    window.scroll(0,0)

    return (
      <>
        <section>
          <img src={artist?.imageURL} alt={artist?.name} />
          <div>{artist?.name}</div>
          <div>{artist?.blurb}</div>
          <div>{artist?.roles}</div>
          <a href={artist?.infoURL}>{artist?.infoURL}</a>
        </section>
      </>
    );
};
