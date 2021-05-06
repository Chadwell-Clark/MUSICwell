//     *****     Chad[well] Clark 2021     *****     //

import React from "react";
import mark from "../../assets/mark.png";

export const Mark = ({ handleMark }) => {
  return (
    <>
      <img className="mark" onClick={handleMark} src={mark} alt="Mark" />
    </>
  );
};
