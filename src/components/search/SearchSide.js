//     *****     Chad[well] Clark 2021     *****     //

import React, { useState } from "react";
import { getBinaryJazz } from "../../modules/BinaryJazz.js";
import "./Search.css";
// import { getAllArtists } from "../../modules/ArtistsManager.js";
// import { SearchList } from "./SearchList.js"
// import { render}from "react-dom";
// import {Link} from "react-router-dom"

import { useHistory } from "react-router";

export const SearchSide = ({ searchInputText, setSearchInputText }) => {
  const [text, setText] = useState("");
  const [jazz, setJazz] = useState("");
  // const[artists, setArtists] = useState([]);
  // const [result, setResult] = useState([]);

  const history = useHistory();

  const handleSearch = (e) => {
    // e.preventDefault();
    // window.speechSynthesis.speak(new SpeechSynthesisUtterance("Hello World"));

    setSearchInputText(text);
    history.push("/search");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Enter");
      handleSearch();
    }
  };
  // const gotoSearchList = (result) => {
  //   console.log("result",JSON.stringify(result))
  //   history.push("/search")
  //   <SearchList artist={ result } />
  //   }

  const handleClick = (e) => {
    e.preventDefault();
    getBinaryJazz().then((res) => {
      setJazz(res);
      return res;
    });
  };

  // useEffect(() => {
  //   getAllArtists()
  //   .then((a) => {
  //     setArtists(a)
  //     console.log("artist list to search", a)
  //     return a
  //   })

  // }, [])

  // useEffect(() => {
  //   gotoSearchList(result)
  // }, [result])

  return (
    <>
      <div className="search-side">
        <div className="searchLabel">Search for Artists</div>
        <input
          className="searchInput"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
        ></input>
        <div>
          <button
            className="searchBtn Btn"
            type="button"
            onClick={handleSearch}
          >
            {/* <button className="searchBtn Btn" onClick={handleSearch}> */}
            Search
          </button>
        </div>
        <div>
          <button className="searchBin Btn" onClick={handleClick}>
            Story
          </button>
          <div className="jazzStory">{jazz}</div>
        </div>
      </div>
    </>
  );
};
