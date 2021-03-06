//     *****     Chad[well] Clark 2021     *****     //

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import {
  getUsersWells,
  addArtistToWell,
  deleteArtistFromWell,
} from "../../modules/WellsManager.js";
import { getArtistById } from "../../modules/ArtistsManager.js";
import { getGroupsByArtistId } from "../../modules/GroupManager.js";
import { currUser } from "../helpers/Helpers.js";
import { getGroupRelatedArtists } from "../../modules/ArtistsManager.js";
import { RelatedArtistCard } from "./RelatedArtistCard.js";

export const ArtistDetail = () => {
  const [artist, setArtist] = useState({});
  const[currWell, setCurrWell] = useState([])
  const[wellArr, setWellArr]=useState([])
  const[relatedGroups, setRelatedGroups] = useState([])
  const[relatedArtists,setRelatedArtists] = useState()
  const [isLoading, setIsLoading] = useState(true);

  //   ***  Set artistId to one passed in params
  const { artistId } = useParams();
  const history = useHistory();
  // console.log(artistId);
  //   ***  Set loggedInUser to the currently logged in user
  const loggedInUser = currUser();
  //   ***  Get the userWells for the current logged in user
  //   ***   Set currWell to logged in users well
  const usersWells = () => {
    getUsersWells(loggedInUser)
    .then((res) => setCurrWell(res))
  }

  //   ***  Get an array of artistIds from logged in users well
  //   ***  Set as wellArr
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
  //   ***  Get comment for current artist from
  //   ***    logged in users well store as commArt
  let commArt = [];
  if (currWell.artistId !== "") {
    commArt = currWell.find((comm) => {
      return artist.id === comm.artistId;
    });
  }
  //   ***  Get groups related to artist based off artistId
  //   ***    set relatedGroups to this array of objects
  const getRelated = () => {
    getGroupsByArtistId(artistId)
    .then((groups) => setRelatedGroups(groups))
  }
  //   ***  Get artists that are related to groups 
  //   ***   map through each group and use groupId to 
  //   ***   call database to get related artist to those groups
  //   ***   Add those artists to relatedartist array as objects

  const getArtists =() => {
    // let artistArr = []
    Promise.all(relatedGroups.map((group) => {
      // console.log("groupId",group.groupId)
        return getGroupRelatedArtists(group.groupId)}))
      .then((parsed) => {
        // console.log("parsed",parsed)
        // let compArr = []
        // parsed.forEach(arr => compArr.concat(arr))
        // setRelatedArtists(...parsed)
        parsed = parsed.reduce((a, b) => a.concat(b), []);
        // console.log("compArr",parsed)
        setRelatedArtists(parsed)
      })
    
  }

  //   ***  Add artist to logged in users well
  //   ***   then push to artist detail edit page
  const handleAdd = (e) => {
    e.preventDefault()
    const artistAddObj = {
      userId: loggedInUser,
      artistId: +artistId,
      albumId: 1,
      comment: ""
    }
    // console.log("addObj",artistAddObj)
    addArtistToWell(artistAddObj)
    .then(() => history.push(`/artistdetailedit/${+artistId}`))
  }

  const handleEdit = (e) => {
    e.preventDefault();
    // console.log("edit");
    history.push(`/artistdetailedit/${+artistId}`);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    // console.log("delete", commArt.id, commArt);
    deleteArtistFromWell(commArt.id)
    .then(() => history.push("/"))
  };

  useEffect(() => {
    getArtistById(artistId).then((a) => {
      setArtist(a);
      usersWells();
      getRelated();
      //  window.scrollTo(0, 0);
      
      // setIsLoading(false);
    });
  }, [artistId]);
  
    useEffect(() => {
      getWellArr();
    }, [currWell])

    useEffect(() => {
      getArtists();
      // window.scrollTo(0, 0);
      setIsLoading(false);
    }, [relatedGroups])


  

  //   ***   If artist is in logged in user's well add edit and delete buttons and comment
  //   ***        if not then present an add artist button

  let btns = "";
  
  if (wellArr.includes(+artistId) ) {
    btns = (
      <>
        <div>
          <button
            type="button"
            className="artist_detail_edit artist-btn"
            onClick={handleEdit}
          >
            Edit Comments
          </button>
          <button
            type="button"
            className="artist_delete artist-btn"
            onClick={handleDelete}
          >
            Remove Artist
          </button>
          <div className="artist_card_comment">{commArt?.comment}</div>
        </div>
      </>
    );
  } else {
    btns = (
      <>
      <div>
        <button 
        type="button" 
        className="artist_add artist-btn"
        onClick={handleAdd}
        >Add to your [well]</button>
        </div>
      </>
    );
  }

  // window.scroll(0, 0);
  if (isLoading === true || !relatedArtists) {
    return (
      <>
      <div className="detail_loading">Loading...</div>
      </>
    )
  }else {
    // window.scroll(0, 0);
  return (
    <>
      {/* {window.scrollTo(0, 0)} */}
      <section>
        {/* {console.log("wellArr", wellArr)} */}
        {/* {console.log("userWell", currWell)} */}
        {/* {console.log("artistId", artistId)} */}
        {/* {console.log("related-groups", relatedGroups)} */}
        {/* {console.log("related-artists", relatedArtists)} */}
        <div className="detail-artist-name">{artist?.name}</div>
        <img className="detail_img" src={artist?.imageURL} alt={artist?.name} />
        <div className="detail">{artist?.blurb}</div>
        <div className="detail">{artist?.roles}</div>
        <a className="detail" href={artist?.infoURL}>{artist?.infoURL}</a>

        <div>{btns}</div>
      </section>
      <section>
        <div className="related-title">Related Artists</div>
        {relatedArtists.map((relArt) => (
          <RelatedArtistCard key={relArt.id} relArt={relArt} artist={artist} />
        ))}
        {/* {relatedArtists[0]?.artist?.name} */}

        {/* <div>{relatedGroups[0]?.groupId}</div> */}
      </section>
    </>
  );
  }
};
