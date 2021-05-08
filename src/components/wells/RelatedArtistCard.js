import React from "react";

import { Link } from "react-router-dom";

export const RelatedArtistCard = ({ relArt , artist }) => {

// const history = useHistory()


// const handleClick = (e) => {
//   e.preventDefault()
//     console.log(artist?.artist?.id);
//     history.push(`/artistdetail/${+artist?.artistId}`);
// }
console.log("artist",artist)
console.log("related",relArt)


if(relArt.artistId === artist.id) {
  return <></>
} else {
  return (
    <>
      {/* <Link to={`/artistdetail/${artist.id}`}> */}
      <div className="related-artist-link">
        {relArt?.artist?.name?.toUpperCase()}
      </div>
      <Link to={`/artistdetail/${relArt.artist.id}`}>
        <button className="artist_detail"> Artist Details</button>
      </Link>
      {/* <button className="artist_detail" onClick={handleClick}> Artist Details</button> */}

      {/* </Link> */}
    </>
  );
}
};


