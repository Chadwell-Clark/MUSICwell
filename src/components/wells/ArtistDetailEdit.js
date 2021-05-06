//     *****     Chad[well] Clark 2021     *****     //

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getUsersWells, deleteArtistFromWell, editArtistInWell} from "../../modules/WellsManager.js";
import { getArtistById } from "../../modules/ArtistsManager.js";
// import { getGroupsByArtistId } from "../../modules/GroupManager.js";
import { currUser, getUserObj } from "../helpers/Helpers.js";
// import { getGroupRelatedArtists } from "../../modules/ArtistsManager.js";

export const ArtistDetailEdit = () => {
  const [artist, setArtist] = useState({});
  const [currWell, setCurrWell] = useState([]);
  const [wellArr, setWellArr] = useState([]);
  const [comment, setComment] = useState()

  // const [commArt, setCommArt] =useState([])
  // const [relatedGroups, setRelatedGroups] = useState([]);
  // const [relatedArtists, setRelatedArtists] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  // console.log("Artist detail is loaded");
  const { artistId } = useParams();
  const history = useHistory();
  // console.log(artistId);
  const loggedInUser = currUser();

  const usersWells = () => {
    getUsersWells(loggedInUser)
    .then((res) => setCurrWell(res));
  };

  const getWellArr = () => {
    let arr = [];
    currWell.map((item) => {
      if (item.artistId !== "") {
        arr.push(item?.artistId);
      }
      // console.log("ArtistId", item?.artistId)
      return item;
    });
    // console.log("arr",arr)
    setWellArr(arr);
  };

  let commArt = []
  // const getComment =() => {
  if (currWell.artistId !== "") {    
    commArt =(currWell.find((comm) => 
    artist.id === comm.artistId
    ));
    // setComment(commArt?.comment)
  }
// }

  const handleFieldChange = (e) => {
    const stateToChange = {...comment};
    let editedVal = e.target.value;
    console.log(editedVal);
    stateToChange[e.target.id] = editedVal;
    setComment(stateToChange);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("delete", commArt.id, commArt);
    deleteArtistFromWell(commArt.id).then(() => history.push("/"));
  };

  const saveComment = (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("save",commArt)
    const editedComment = {
      id: commArt.id,
      userId: commArt.userId,
      artistId: commArt.artistId,
      albumId: commArt.albumId,
      comment: commArt.comment,
    }
    console.log("saveCommment", editedComment)
  }


  useEffect(() => {
    getArtistById(artistId).then((a) => {
      setArtist(a);
      usersWells()
      //  getComment()
      // getRelated();

      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getWellArr();
  }, [currWell]);

  // useEffect(() => {
  //     getComment()
  //     .then(() => setComment(commArt.comment))
  //   }, [])
    
    window.scroll(0, 0);
    
    
    //        Functionality:
    //               Add artist to well
    //               remove artist from well(passed from parent?)
    //                edit artist comments
    //
    
    return (
      <>
        <section>
          {/* {console.log("wellArr", wellArr)} */}
          {/* {console.log("userWell", currWell)} */}
          {/* {console.log("artistId", artistId)} */}
          {/* {console.log("related-groups", relatedGroups)} */}
          {/* {console.log("related-artists", relatedArtists)} */}
          <div className="detail-artist-name">{artist?.name}</div>
          <img src={artist?.imageURL} alt={artist?.name} />
          <div>{artist?.blurb}</div>
          <div>{artist?.roles}</div>
          <a href={artist?.infoURL}>{artist?.infoURL}</a>

          <div>
            <button className="artist_delete" onClick={handleDelete}>
              {" "}
              Remove Artist!{" "}
            </button>{" "}
            <form>
              <label htmlFor="comment"></label>
              <textarea
                type="textarea"
                id="comment"
                onChange={handleFieldChange}
                className="artist_card_comment"
                value={commArt?.comment}
                required
                autoFocus
                rows="4"
                cols="50"
              />
              <button onClick={saveComment} className="artist_detail_edit">
                Save Comments
              </button>
            </form>
          </div>
        </section>
        {/* <section> */}
        {/* <div>Related Artists ???</div> */}
        {/* <div>{relatedGroups[0]?.groupId}</div> */}
        {/* </section> */}
      </>
    );
};



// useEffect(() => {
//   getArtists();
// }, [relatedGroups]);
  // const getRelated = () => {
  //   getGroupsByArtistId(artistId).then((groups) => setRelatedGroups(groups));
  // };

  // const getArtists = () => {
  //   // let artistArr = []
  //   Promise.all(
  //     relatedGroups.map((group) => {
  //       console.log("groupId", group.groupId);
  //       return getGroupRelatedArtists(group.groupId).then((parsed) => {
  //         console.log("parsed", parsed);
  //         setRelatedArtists([...parsed]);
  //         return parsed;
  //       });
  //     })
  //   );
  // };

  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   const artistAddObj = {
  //     userId: loggedInUser,
  //     artistId: +artistId,
  //     albumId: "",
  //     comment: "",
  //   };
  //   console.log("addObj", artistAddObj);
  //   addArtistToWell(artistAddObj);
  //   // .then(() => )
  // };

 // //   ***   If artist is in logged in user's well add edit and delete buttons and comment
  // //   ***        if not then present an add artist button

  // let btns = "";
  // if (wellArr.includes(artistId)) {
  //   btns = (
  //     <>
  //       <div>
  //         <button className="artist_detail_edit">edit</button>{" "}
  //         <button className="artist_delete"> remove </button>{" "}
  //         <div className="artist_card_comment">{commArt?.comment}</div>
  //       </div>
  //     </>
  //   );
  // } else {
  //   btns = (
  //     <>
  //       <div>
  //         <button type="button" className="artist_add" onClick={handleAdd}>
  //           add
  //         </button>{" "}
  //       </div>
  //     </>
  //   );
  // }