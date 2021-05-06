//     *****     Chad[well] Clark 2021     *****     //
import React, { useState } from "react";
import { getDobbs } from "../../modules/Dobbs.js";
import "./Footer.css";
import { Bob } from "./Bob.js";

export const Footer = () => {

  const [bobs, setBobs] = useState([]);

  const handleBob = () => {
    getDobbs().then((jr) => {
      console.log(jr);
      setBobs(jr);
      return jr;
    });
  };
  return (
    <>
      <div className="footer">
        <div className="footer-title">&copy;Chad[well] on github</div>
        <div className="bbdbb">{bobs.joke}</div>
        <div className="bob">
          <Bob handleBob={handleBob}/>
        </div>
      </div>
    </>
  );
};
