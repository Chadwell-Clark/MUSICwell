import React from 'react';
import { Route } from "react-router-dom";
import { UserWell } from "./wells/UserWell.js"
import { ArtistDetail } from "./wells/ArtistDetail.js"




export const ApplicationViews = () => {
    return (
        <>
        <div className="container_appViews">
            <Route exact path="/">
                {/* Render the component for Users Well */}
                <UserWell />
                </Route>
                <Route path="/ArtistDetail/:artistId(\d+)">
                    <ArtistDetail />
                </Route>

        </div>
        </>
    )
}
