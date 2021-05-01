import React from 'react';
import { Route } from "react-router-dom";
import { UserWellList } from "./wells/UserWellList.js"
import { ArtistDetail } from "./wells/ArtistDetail.js"
import { YonderWellList } from "./yonderwells/YonderWellList.js"
import { YonderWell } from "./yonderwells/YonderWell.js"
import { SearchList } from "./search/SearchList.js"




export const ApplicationViews = ({searchInputText}) => {
    return (
        <>
        <div className="container_appViews">
            <Route exact path="/">
                {/* Render the component for Users Well */}
                <UserWellList />
                </Route>
                <Route path="/artistdetail/:artistId(\d+)">
                    <ArtistDetail />
                </Route>
                <Route path="/yonderwell/:id(\d+)">
                    <YonderWell />
                </Route>
                <Route path="/yonderwelllist">
                    <YonderWellList />
                </Route>
                <Route path="/search">
                    <SearchList searchInputText={searchInputText}/>
                </Route>

        </div>
        </>
    )
}
