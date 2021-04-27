import React from 'react'
import "./WellArtistCard.css";




export const WellArtistCard = ({artist}) => {
    console.log("artist card", artist)

    return (
        <>
        <div className="artist_card">
            <div><img className="artist_card_img" src={artist?.imageURL} alt={artist?.name}/></div>
            <div className="artist_card_info">
            <div>{artist?.name}</div>
            <div>{artist?.blurb}</div>
            <a href={artist?.infoURL}>More info about {artist.name}</a>
            </div>
        </div>
        </>
    );


};