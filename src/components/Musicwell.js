import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Grid,Cell } from "styled-css-grid"
import { ApplicationViews } from "./ApplicationViews.js";
import { Login } from "./auth/Login.js";
import { Register } from "./auth/Register.js";
import  {NavBar }  from "./navbar/NavBar.js";
import "./Musicwell.css"
import { Search } from "./search/Search.js"
import { YonderWells } from "./yonderWells/YonderWells.js";
import {Footer} from "./footer/Footer.js";

export const Musicwell = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("musicwell_userId")) {
            // console.log(`user loggged in `)
          return (
            <>
              <div className="container_main">
                <NavBar />
                <Grid className="grid" flow="row dense" gap="10px" columns={6}>
                  <Cell
                    className="container_appviews"
                    center
                    width={4}
                    height={20}
                  >
                    <ApplicationViews />
                  </Cell>
                  <Cell
                    className="container_search"
                    center
                    middle
                    width={2}
                    height={9}
                  >
                    <Search />
                  </Cell>
                  <Cell
                    className="container_yonderWells"
                    center
                    middle
                    width={2}
                    height={11}
                  >
                    <YonderWells />
                  </Cell>
                  {/* <Cell
                    className="container_footer"
                    center
                    middle
                    width={2}
                    height={2}
                  >
                    <Footer /> */}
                  {/* </Cell> */}
                </Grid>
                <Footer />
              </div>
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);