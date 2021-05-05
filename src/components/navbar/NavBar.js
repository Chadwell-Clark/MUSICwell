//     *****     Chad[well] Clark 2021     *****     //

import React from "react";
import "./NavBar.css";
import { Grid, Cell } from "styled-css-grid";
import { Logo } from "./Logo.js";
import { Link, useHistory } from "react-router-dom";


export const NavBar = () => {

  const history = useHistory()

  const handleLogout = (e) => {
    sessionStorage.clear()
    history.push("/login")
  }

  return (
    <>
      <nav className="nav">
        <Grid columns={24} justifyContent="space-between">
          <Cell className="nav_item" middle center width={4}>
            <Logo />
          </Cell>
          <Cell middle center width={4}>
            <Link className="nav_item" to="/">
              My [well]{" "}
            </Link>
          </Cell>
          <Cell middle center width={4}>
            <Link className="nav_item" to="/yonderwellslist">
              Yonder [well]s{" "}
            </Link>
          </Cell>

          <Cell middle center width={8}>
            <div className="nav_title">MUSIC[well]</div>
          </Cell>

          <Cell middle center width={4}>
            {/* <Link className="nav_item logout" to="/login"> */}
              <span className="nav_item logout"  onClick={handleLogout}>
                Logout
              </span>
            {/* </Link> */}
          </Cell>
        </Grid>
      </nav>
    </>
  );
};

