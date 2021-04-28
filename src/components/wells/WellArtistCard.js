import React from 'react'
import "./WellArtistCard.css";




export const WellArtistCard = ({artist, artistsList}) => {
    console.log("artist card", artist)
    let commArt = []
    if (artistsList.artistId !== "") {
        commArt = artistsList.find(comm => {
                    return artist.id === comm.artistId
    })}
    return (
        <>
        <div className="artist_card">
            <div><img className="artist_card_img" src={artist?.imageURL} alt={artist?.name}/></div>
            <div className="artist_card_info">
            <div>{artist?.name}</div>
            <div>{artist?.blurb}</div>
            <a href={artist?.infoURL}>More info about {artist.name}</a>
            <div>
                <div>{commArt.comment}</div>
            </div>
            </div>
        </div>
        </>
    );


};