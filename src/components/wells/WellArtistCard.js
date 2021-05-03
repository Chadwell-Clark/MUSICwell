import React from "react";
import "./WellArtistCard.css";
import { currUser, getUserObj } from "../helpers/Helpers.js";
import {Link} from "react-router-dom";

export const WellArtistCard = ({ artist, artistsList, userId }) => {
    
    const user = userId;
    const loggedInUser = currUser();
  // console.log("artist card", artist)
  let commArt = [];
  if (artistsList.artistId !== "") {
    commArt = artistsList.find((comm) => {
      return artist.id === comm.artistId;
    });
  }
  console.log("Logged IN", loggedInUser)
  console.log("current well", artistsList[0].userId)
  console.log("artistlist",artistsList)
  let btns = ""
  if (artistsList[0].userId === loggedInUser ) {
    btns = (
      <>
        {" "}
        <Link to={`/artistdetail/${artist.id}`}><button className="artist_detail" >Details</button></Link>
        {/* <button className="artist_detail_edit">edit</button>{" "}
        <button className="artist_delete"> delete </button>{" "} */}
      </>
    );
  } else {
      btns = (
        <>
          {" "}
          <Link to={`/artistdetail/${artist.id}`}>
            <button className="artist_detail">Details</button>
          </Link>
          <button className="artist_add">add</button>{" "}
        </>
      );
  }


  console.log("artist",artist)
  console.log("artistsList",artistsList)
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
              <div>{artist?.name}</div>
              <div>{artist?.blurb}</div>
              <a href={artist?.infoURL}>More info about {artist?.name}</a>
            </div>
            <div className="artist_card_top_btn">{btns}</div>
          </div>
          {/* <div className="artist_card_sec"> */}
            <div className="artist_card_comment">{commArt?.comment}</div>
            {/* <div className="artist_card__bot_btn">comment btn logic</div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
