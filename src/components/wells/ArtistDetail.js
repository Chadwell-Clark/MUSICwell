//     *****     Chad[well] Clark 2021     *****     //

import React, { useState, useEffect } from "react";
import { getArtistById } from "../../modules/ArtistsManager.js";
import { useParams, useHistory } from "react-router-dom";
import { currUser, getUserObj } from "../helpers/Helpers.js";
import { getUsersWells } from "../../modules/WellsManager.js";

export const ArtistDetail = () => {
  const [artist, setArtist] = useState({});
  const[currWell, setCurrWell] = useState([])
  const[wellArr, setWellArr]=useState([])
  const[related, setRelated]= useState([])
  const [isLoading, setIsLoading] = useState(true);
  // console.log("Artist detail is loaded");
  const { artistId } = useParams();
  // const history = useHistory();
  // console.log(artistId);
  const loggedInUser = currUser();

  const usersWells = () => {
    getUsersWells(loggedInUser)
    .then((res) => setCurrWell(res))
  }

  const getWellArr = () => {
    let arr = [];
    currWell.map(item => {
      if (item.artistId !== "")
        {arr.push(item?.artistId)}
        console.log("ArtistId", item?.artistId)
        return item
      })
    console.log("arr",arr)
    setWellArr(arr)
  }
  
  useEffect(() => {
    getArtistById(artistId).then((a) => {
      setArtist(a);
      usersWells();
      setIsLoading(false);
    });
  }, []);
  
  // useEffect(() => {
    //   usersWells()
    //   // .then(()=> getWellArr())
    // }, [])
    
    useEffect(() => {
    //  if (currWell > 0) {
      getWellArr()
    //  }
    }, [currWell])

  window.scroll(0, 0);

  //add buttons based on:
  //        1.who the current user is  (current user)
  //            and
  //        2.whether the artist exist in their well
  //    Create array from usersWells that is filled with artist ids from well
  //        if currUser === logged in user && artistId is in logged in user's well
  //                   show comments and edit and remove buttons
  //                    then show related artist links
  //         if currUser !== logged in user || artist is not in user's well
  //                     show comments and add artist button
  //                     then show related artist links
  let btns = "";
  if (artistId in wellArr  ) {
    btns = (
      <>
      <div>
        {" "}
        {/* <Link to={`/artistdetail/${artist.id}`}>
          <button className="artist_detail">Details</button>
        </Link> */}
        <button className="artist_detail_edit">edit</button>{" "}
        <button className="artist_delete"> remove </button>{" "}
        </div>
      </>
    );
  } else {
    btns = (
      <>
      <div>
        {/* {" "}
        <Link to={`/artistdetail/${artist.id}`}>
          <button className="artist_detail">Details</button>
        </Link> */}
        <button className="artist_add">add</button>{" "}
        </div>
      </>
    );
  }

  //        Functionality:
  //               Add artist to well
  //               remove artist from well(passed from parent?)
  //                edit artist comments
  //
  
  return (
    <>
      <section>
        {console.log("wellArr", wellArr)}
        {console.log("userWell", currWell)}
        {console.log("artistId", artistId)}
        <img src={artist?.imageURL} alt={artist?.name} />
        <div>{artist?.name}</div>
        <div>{artist?.blurb}</div>
        <div>{artist?.roles}</div>
        <a href={artist?.infoURL}>{artist?.infoURL}</a>
        <div>
       {btns}
       </div>
      </section>
      <section>
        <div>
          Related Artists

        </div>
      </section>
    </>
  );
};
