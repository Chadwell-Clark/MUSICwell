//     *****     Chad[well] Clark 2021     *****     //

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { getUsersWells } from "../../modules/WellsManager.js";
import { getArtistById } from "../../modules/ArtistsManager.js";
import { getGroupsByArtistId } from "../../modules/GroupManager.js";
import { currUser, getUserObj } from "../helpers/Helpers.js";
import { getGroupRelatedArtists } from "../../modules/ArtistsManager.js";

export const ArtistDetail = () => {
  const [artist, setArtist] = useState({});
  const[currWell, setCurrWell] = useState([])
  const[wellArr, setWellArr]=useState([])
  const[relatedGroups, setRelatedGroups] = useState([])
  const[relatedArtists,setRelatedArtists] = useState([])
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
        // console.log("ArtistId", item?.artistId)
        return item
      })
    // console.log("arr",arr)
    setWellArr(arr)
  }

  let commArt = [];
  if (currWell.artistId !== "") {
    commArt = currWell.find((comm) => {
      return artist.id === comm.artistId;
    });
  }

  const getRelated = () => {
    getGroupsByArtistId(artistId)
    .then((groups) => setRelatedGroups(groups))
  }

  const getArtists =() => {
    // let artistArr = []
    Promise.all(relatedGroups.map((group) => {
      console.log("groupId",group.groupId)
       return getGroupRelatedArtists(group.groupId)
      .then((parsed) => {
        console.log("parsed",parsed)
        setRelatedArtists([ ...parsed])
        return parsed
      })
    }))
  }

  useEffect(() => {
    getArtistById(artistId).then((a) => {
      setArtist(a);
      usersWells();
      getRelated()
      
      setIsLoading(false);
    });
  }, []);
  
  // useEffect(() => {
    //   usersWells()
    //   // .then(()=> getWellArr())
    // }, [])
    
    useEffect(() => {
    //  if (currWell > 0) {
      getWellArr();
      // getArtists();
      
    //  }
    }, [currWell])

    useEffect(() => {
      getArtists();
    }, [relatedGroups])

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
          <div className="artist_card_comment">{commArt?.comment}</div>
          <button className="artist_detail_edit">edit</button>{" "}
          <button className="artist_delete"> remove </button>{" "}
        </div>
      </>
    );
  } else {
    btns = (
      <>
      <div>
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
        {/* {console.log("wellArr", wellArr)} */}
        {console.log("userWell", currWell)}
        {/* {console.log("artistId", artistId)} */}
        {console.log("related-groups", relatedGroups)}
        {console.log("related-artists", relatedArtists)}
        <img src={artist?.imageURL} alt={artist?.name} />
        <div>{artist?.name}</div>
        <div>{artist?.blurb}</div>
        <div>{artist?.roles}</div>
        <a href={artist?.infoURL}>{artist?.infoURL}</a>
        

        <div>{btns}</div>
      </section>
      <section>
        <div>{relatedGroups[0]?.groupId}</div>
      </section>
    </>
  );
};
