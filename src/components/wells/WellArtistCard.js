import React from 'react'




export const WellArtistCard = ({artist}) => {
    console.log("artist card", artist)

    return (
        <>
        <div>
            <div>{artist.name}</div>
        </div>
        </>
    );


};