import React, { useState } from 'react'
import { getBinaryJazz } from "../../modules/BinaryJazz.js";
import "./Search.css";



export const Search = () => {
    const[text, setText] = useState("");
    const binJazz = getBinaryJazz()
    return (
      <>
        <div className="">
          <div className="searchLabel">Search for Artists</div>
          <input className="searchInput" value={text}></input>
          <div>
            <button className="searchBtn Btn">Search</button>
          </div>
          <div>
            <button className="searchBin Btn">Binary</button>
            {/* {binJazz} */}
          </div>
        </div>
      </>
    );
}