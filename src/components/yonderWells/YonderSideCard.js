import React from 'react'
import { Link } from "react-router-dom";
export const YonderSideCard = ({user}) => {

    return (
      <div>
          
          <Link to={`/yonderwell/${user.id}`}>
        <div>{user?.firstName.toUpperCase()}'s [well]</div>
        
        </Link>
      </div>
    );
}