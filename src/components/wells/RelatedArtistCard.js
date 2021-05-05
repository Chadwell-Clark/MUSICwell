import React from "react";

// import { Link } from "react-router-dom";

export const RelatedArtistCard = ({ artist }) => {

  return (
    <>
      {/* <Link to={`/artistdetail/${artist.id}`}> */}
        <div className="related-artist-link">
          {artist?.artist?.name?.toUpperCase()}
        </div> 
        <button>Artist Details</button>
      {/* </Link> */}
    </>
  );
};


