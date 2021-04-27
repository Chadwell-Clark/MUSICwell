import React, { useState } from 'react'
import { getBinaryJazz } from "../../modules/BinaryJazz.js";
import "./Search.css";



export const Search = () => {
    const[text, setText] = useState("");
    const[jazz, setJazz] = useState("");

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
          <input className="searchInput" value={text}></input>
          <div>
            <button className="searchBtn Btn">Search</button>
          </div>
          <div>
            <button className="searchBin Btn" onClick={handleClick}>
              Binary
            </button>
            <div>{jazz}</div>
          </div>
        </div>
      </>
    );
}