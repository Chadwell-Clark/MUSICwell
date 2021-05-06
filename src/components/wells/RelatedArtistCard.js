import React, { useEffect } from "react";

import { useHistory, Link } from "react-router-dom";

export const RelatedArtistCard = ({ artist }) => {

// const history = useHistory()


// const handleClick = (e) => {
//   e.preventDefault()
//     console.log(artist?.artist?.id);
//     history.push(`/artistdetail/${+artist?.artistId}`);
// }


  return (
    <>
      {/* <Link to={`/artistdetail/${artist.id}`}> */}
      <div className="related-artist-link">
        {artist?.artist?.name?.toUpperCase()}
      </div>
      <Link to={`/artistdetail/${artist.artist.id}`}>
        <button className="artist_detail"> Artist Details</button>
      </Link>
      {/* <button className="artist_detail" onClick={handleClick}> Artist Details</button> */}

      {/* </Link> */}
    </>
  );
};


