import React from 'react';
import { Route } from "react-router-dom";
import { UserWell } from "./wells/UserWell.js"
import { ArtistDetail } from "./wells/ArtistDetail.js"
import { YonderWells } from "./yonderwells/YonderWells.js"
import { SearchList } from "./search/SearchList.js"




export const ApplicationViews = ({searchInputText}) => {
    return (
        <>
        <div className="container_appViews">
            <Route exact path="/">
                {/* Render the component for Users Well */}
                <UserWell />
                </Route>
                <Route path="/artistdetail/:artistId(\d+)">
                    <ArtistDetail />
                </Route>
                <Route path="/yonderwells">
                    <YonderWells />
                </Route>
                <Route path="/search">
                    <SearchList searchInputText={searchInputText}/>
                </Route>

        </div>
        </>
    )
}
