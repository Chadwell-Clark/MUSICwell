//     *****     Chad[well] Clark 2021     *****     //

import React from "react";
import "./Yonder.css";
import { Link } from "react-router-dom";
export const YonderSideCard = ({ user }) => {
  return (
    <div>
      <Link to={`/yonderwell/${user.id}`}>
        <div className="yonder-link">
          {user?.firstName.toUpperCase()}'s [well]
        </div>
      </Link>
    </div>
  );
};
