//     *****     Chad[well] Clark 2021     *****     //
import React, { useState } from "react";
import { getDobbs } from "../../modules/Dobbs.js";
import "./Footer.css";
import { Bob } from "./Bob.js";
import { Mark } from "./Mark.js";

export const Footer = () => {

  const [bobs, setBobs] = useState([]);

  const handleBob = () => {
    getDobbs().then((jr) => {
      setBobs(jr);
      return jr;
    });
  };
  const handleMark = () => {
    console.log("github link")
  };

  return (
    <>
      <div className="footer">
        <div className="footer-title">
          &copy;Chad[well]
        </div>
          <div><Mark handleMark={handleMark} /></div>
        <div className="bbdbb">{bobs.joke}</div>
        <div className="bob">
          <Bob handleBob={handleBob} />
        </div>
      </div>
    </>
  );
};
