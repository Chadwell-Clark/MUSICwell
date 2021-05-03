import React from "react";
import "./NavBar.css";
import { Grid, Cell } from "styled-css-grid";
import { Logo } from "./Logo.js"
import { Link } from "react-router-dom";



export const NavBar = () => {
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
                {" "}
                Yonder [well]s{" "}
              </Link>
            </Cell>
            {/* <Cell className="nav_item" middle center width={2}>
              icon
            </Cell> */}
            <Cell middle center  width={8}>
              <div className="nav_title">MUSIC[well]</div>
            </Cell>
            {/* <Cell className="nav_item" middle center width={2}>
              icon
            </Cell> */}
            <Cell middle center width={4}>
              <Link className="nav_item logout" to="/login">
                {" "}
                Logout
              </Link>
            </Cell>
          </Grid>
        </nav>
      </>
    );
}
        //   <ul>
        //     <li>My [well]</li>
        //     <li>Yonder [well]s</li>
        //     <li>
        //       <brand>MUSIC[well]</brand>
        //     </li>
        //     <li>Logout</li>
        //   </ul>
        //   <logo>LOGO</logo>
        //   lo
        //   <brand>MUSIC[well]</brand>