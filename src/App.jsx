import { useEffect, useState } from 'react'
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
import { EditProfile } from './components/AfterMVP/editProfile/EditProfile.jsx'
import { EditOutfit } from './components/editOutfit/EditOutfit.jsx'


export const App = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
      const localClosetUser = localStorage.getItem("user")
      const UserObject = JSON.parse(localClosetUser)
      setCurrentUser(UserObject)
    
  }, [])

  return (<>
    <NavBar setCurrentUser={setCurrentUser}/>
    <Routes>
    
      <Route path="my-closet" element={<MyCloset currentUser={currentUser}/>} />
      <Route path="upload" element={<Upload currentUser={currentUser} />} />
      <Route path="my-outfit" element={<MyOutfit currentUser={currentUser}/>} />
      {/* <Route path="add-clothing-type" element={<AddClothingType />} /> */}
      <Route path="my-profile" element={<MyProfile currentUser={currentUser} />} />
      <Route path="edit-profile" element={ <EditProfile currentUser={currentUser}  />} />
      <Route path="sign-in" element={<SignIn setCurrentUser={setCurrentUser}/>} />
      <Route path="sign-up" element={<SignUp setCurrentUser={setCurrentUser}/>} />
      <Route path="edit-outfit" element={  <EditOutfit currentUser={currentUser}/>} />
      < Route path="/" element={<Home />} />

    </Routes>
  </>
  )
}


