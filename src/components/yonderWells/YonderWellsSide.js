import React, {useEffect, useState} from 'react'
import {currUser} from "../helpers/Helpers.js"
import { getAllWells} from "../../modules/WellsManager.js";
import { getAllUsers} from "../../modules/UsersManager.js";
import { Link } from "react-router-dom";
import { YonderSideCard } from "./YonderSideCard.js";


export const YonderWellsSide = () => {
  const[yonWells, setYonWells] = useState([]);
  const[yonUsers, setYonUsers] = useState([]);
  const user = currUser();


  const yonderSide = () => {
    getAllWells()
   .then((res) => {
     console.log("getAllWells", res)
     setYonWells(res.filter(well => well.userId !== user && well.artistId !== ""))
    }
   )}
  const allUsers =  () => {
    getAllUsers()
    .then((res) => {
      setYonUsers(res.filter(u => u.id !== user))
    } )
  }
   

  useEffect(() => {
   yonderSide();
   allUsers()
  }, [])

  
    
  
  return (
    <>
      <div className="yonder-side-title">Drink from Yonder [well]s</div>
      {console.log("yonWells", yonWells)}
      {console.log("yonUsers", yonUsers)}
      <div>
        {yonUsers.map((u) => <YonderSideCard key={u.id} user={u}/> )}</div>
      
    </>
  );
};
