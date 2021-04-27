import React, { useState } from 'react'
import { getBinaryJazz } from "../../modules/BinaryJazz.js";
import "./Search.css";



export const Search = () => {
    const[text, setText] = useState("");
    const[jazz, setJazz] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

    }

    const handleClick = (e) => {
        e.preventDefault();
        getBinaryJazz()
        .then((res) => {
            setJazz(res)
            return res
        })
    } 

    return (
      <>
        <div className="">
          <div className="searchLabel">Search for Artists</div>
          <input className="searchInput" onChange={e => setText(e.target.value)} value={text}></input>
          <div>
            <button className="searchBtn Btn" onClick={handleSearch}>
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
}