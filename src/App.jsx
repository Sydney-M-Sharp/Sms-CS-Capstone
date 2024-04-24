import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import { NavBar } from './components/navBar/NavBar.jsx'
import { Home } from './components/homePage/Home.jsx'
import { MyCloset } from './components/myCloset/MyCloset.jsx'
import { AddClothingType } from './components/addClothingType/AddClothingType.jsx'

// import { Upload } from './components/upload/Upload.jsx'



export const App = () => {

  return (<>
  
      <NavBar />
      <Home />
      <MyCloset />
      <AddClothingType />
      {/* <Upload /> */}
    </>
  )
}


