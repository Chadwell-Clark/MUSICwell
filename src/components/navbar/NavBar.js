import React from "react";
import "./NavBar.css";
import { Grid, Cell } from "styled-css-grid";
import { Logo } from "./Logo.js"



export const NavBar = () => {
    return (
      <>
        <nav className="nav">
          <Grid columns={24} justifyContent="space-between">
            <Cell className="nav_item" middle center width={4}>
              <Logo />
            </Cell>
            <Cell className="nav_item" middle center width={4}>
              My [well]
            </Cell>
            <Cell className="nav_item" middle center width={4}>
              Yonder [wells]
            </Cell>
            {/* <Cell className="nav_item" middle center width={2}>
              icon
            </Cell> */}
            <Cell middle center className="nav_title" width={8}>
              MUSIC[well]
            </Cell>
            {/* <Cell className="nav_item" middle center width={2}>
              icon
            </Cell> */}
            <Cell className="nav_item" middle center width={4}>
              Logout
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