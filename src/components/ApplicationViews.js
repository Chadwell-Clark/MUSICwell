//     *****     Chad[well] Clark 2021     *****     //

import React from "react";
import { Route } from "react-router-dom";
import { UserWellList } from "./wells/UserWellList.js";
import { ArtistDetail } from "./wells/ArtistDetail.js";
import { ArtistDetailEdit } from "./wells/ArtistDetailEdit.js";
import { YonderWellsList } from "./yonderwells/YonderWellsList.js";
import { YonderWell } from "./yonderwells/YonderWell.js";
import { SearchList } from "./search/SearchList.js";

export const ApplicationViews = ({ searchInputText }) => {
  return (
    <>
      <div className="container_appViews">
        <Route exact path="/artistdetail/:artistId(\d+)">
          <ArtistDetail />
        </Route>
        
        <Route path="/artistdetailedit/:artistId(\d+)">
          <ArtistDetailEdit />
        </Route>
        <Route exact path="/yonderwell/:userId(\d+)">
          <YonderWell />
        </Route>
        <Route path="/yonderwellslist">
          <YonderWellsList />
        </Route>
        <Route path="/search">
          <SearchList searchInputText={searchInputText} />
        </Route>
        <Route exact path="/">
          {/* Render the component for Users Well */}
          <UserWellList />
        </Route>
      </div>
    </>
  );
};
