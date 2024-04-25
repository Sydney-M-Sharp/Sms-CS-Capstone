import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { NavBar } from './components/navBar/NavBar.jsx'
import { Home } from './components/homePage/Home.jsx'
import { MyCloset } from './components/myCloset/MyCloset.jsx'
import { AddClothingType } from './components/addClothingType/AddClothingType.jsx'
import { Upload } from './components/upload/Upload.jsx'
import { MyOutfit } from './components/myOutfit/MyOutfit.jsx'
import { MyProfile } from './components/profile/Profile.jsx'
import { SignIn } from './components/signIn/SignIn.jsx'
import { SignUp } from './components/signUp/SignUp.jsx'
import { EditProfile } from './components/editProfile/EditProfile.jsx'
import { EditOutfit } from './components/editOutfit/EditOutfit.jsx'


export const App = () => {

  return (<>
    <NavBar />
    <Routes>
    
      <Route path="my-closet" element={<MyCloset />} />
      <Route path="upload" element={<Upload />} />
      <Route path="my-outfit" element={<MyOutfit />} />
      <Route path="add-clothing-type" element={<AddClothingType />} />
      <Route path="my-profile" element={<MyProfile />} />
      <Route path="edit-profile" element={ <EditProfile />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="edit-outfit" element={  <EditOutfit />} />
      < Route path="/" element={<Home />} />

    </Routes>
  </>
  )
}


