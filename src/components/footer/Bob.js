//     *****     Chad[well] Clark 2021     *****     //

import React from "react";
import bob from "../../assets/bob.png";


export const Bob = ({handleBob}) => {
 

  return (
    <>
      <img 
      className="bob" 
      onClick={handleBob}
      src={bob} 
      alt="Bob" 
      />
    </>
  );
};
