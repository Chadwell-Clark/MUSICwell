//     *****     Chad[well] Clark 2021     *****     //

import React from "react";
// import "./WellArtistCard.css";
import { currUser } from "../helpers/Helpers.js";
import { Link } from "react-router-dom";
import "./Search.css";

export const ArtistCard = ({ artist, userWells }) => {
  const user = currUser();

  //   let commArt = [];
  //   if (userWell.artistId !== "") {
  //     commArt = userWell.find((comm) => {
  //       return artist.id === comm.artistId;
  //     });
  //   }

  //   console.log("artistlist", userWell);
  let btns = "";
  if (userWells[0]?.userId === user) {
    btns = (
      <>
        {" "}
        <Link to={`artistdetail/${artist.id}`}>
          <button className="artist_detail">Details</button>
        </Link>
        {/* <button className="artist_detail_edit">edit</button>{" "}
        <button className="artist_delete"> delete </button>{" "} */}
      </>
    );
  } else {
    btns = (
      <>
        {" "}
        <Link to={`artistdetail/${artist.id}`}>
          <button className="artist_detail">Details</button>
        </Link>
        {/* <button className="artist_add">add</button>{" "} */}
      </>
    );
  }

  return (
    <>
      <div className="artist_card">
        <div>
          <img
            className="artist_card_img"
            src={artist?.imageURL}
            alt={artist?.name}
          />
        </div>
        <div className="artist_card_body">
          <div className="artist_card_sec">
            <div className="artist_card_info">
              <div className="artist_card_name">{artist?.name}</div>
              <div className="artist_card_blurb">{artist?.blurb}</div>
              {/* <a href={artist?.infoURL}>More info about {artist.name}</a> */}
            </div>
            <div className="artist_card_top_btn">{btns}</div>
          </div>
          {/* <div className="artist_card_sec"> */}
          {/* <div className="artist_card_comment">{commArt.comment}</div> */}
          {/* <div className="artist_card__bot_btn">comment btn logic</div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
