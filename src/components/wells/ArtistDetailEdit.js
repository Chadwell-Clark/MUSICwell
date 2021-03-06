//     *****     Chad[well] Clark 2021     *****     //

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getUsersWells, deleteArtistFromWell, editArtistInWell} from "../../modules/WellsManager.js";
import { getArtistById } from "../../modules/ArtistsManager.js";
// import { getGroupsByArtistId } from "../../modules/GroupManager.js";
import { currUser } from "../helpers/Helpers.js";
// import { getGroupRelatedArtists } from "../../modules/ArtistsManager.js";
import "./ArtistDetail.css";

export const ArtistDetailEdit = () => {
  const [artist, setArtist] = useState({});
  // const [currWell, setCurrWell] = useState([]);
  // const [wellArr, setWellArr] = useState([]);
  // const [comment, setComment] = useState()

  const [commArt, setCommArt] = useState({
    id: 0,
    userId: 0,
    artistId: 0,
    albumId: 0,
    comment: "",
  });
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
    .then((res) => {
      let x = res.find((comm) => +artistId === comm.artistId);

      // if (currWell.artistId !== "") {    
    setCommArt(x)
      // setCurrWell(res)
    });
  };

  // const getWellArr = () => {
  //   let arr = [];
  //   currWell.map((item) => {
  //     if (item.artistId !== "") {
  //       arr.push(item?.artistId);
  //     }
  //     // console.log("ArtistId", item?.artistId)
  //     return item;
  //   });
  //   // console.log("arr",arr)
  //   setWellArr(arr);
  // };

  // let commArt = []
  // const getComment =() => {
  // if (currWell.artistId !== "") {    
  //   setCommArt(currWell.find((comm) => 
  //   artist.id === comm.artistId
  //   ));
  //   // setComment(commArt?.comment)
  // }
// }
  const tx = document.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute(
      "style",
      "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
    );
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }

  const handleFieldChange = (e) => {
    const stateToChange = {...commArt};
    let editedVal = e.target.value;
    // console.log(editedVal);
    stateToChange[e.target.id] = editedVal;
    setCommArt(stateToChange);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    // console.log("delete", commArt.id, commArt);
    deleteArtistFromWell(commArt.id).then(() => history.push("/"));
  };

  const saveComment = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // console.log("save",commArt)
    const editedComment = {
      id: commArt.id,
      userId: commArt.userId,
      artistId: commArt.artistId,
      albumId: commArt.albumId,
      comment: commArt.comment,
    }
    // console.log("saveCommment", editedComment)
    editArtistInWell(editedComment)
    .then(() => history.push(`/artistdetail/${artistId}`))
  }


  useEffect(() => {
    getArtistById(artistId)
    .then((a) => {
      
      setArtist(a);
      usersWells()
      //  getComment()
      // getRelated();

      setIsLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   getWellArr();
  // }, [currWell]);

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
          <img
            className="detail_img"
            src={artist?.imageURL}
            alt={artist?.name}
          />
          <div className="detail">{artist?.blurb}</div>
          <div className="detail">{artist?.roles}</div>
          <a href={artist?.infoURL}>{artist?.infoURL}</a>

          <div>
            <button className="artist_delete" onClick={handleDelete}>
              {" "}
              Remove Artist!{" "}
            </button>{" "}
            <form>
              <label htmlFor="comment"></label>
              <textarea
                placeholder="Thoughts about this artist's relationships, a comment or review... Maybe a nice Taco recipe"
                type="textarea"
                id="comment"
                onChange={handleFieldChange}
                className="artist_card_comment"
                value={commArt.comment}
                required
                autoFocus
                rows="10"
                cols="50"
              />

              <button
                onClick={saveComment}
                className="artist-btn artist_detail_edit"
              >
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