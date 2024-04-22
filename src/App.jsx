import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import { NavBar } from './components/navBar/NavBar.jsx'
import { Home } from './components/homePage/Home.jsx'
// import { Home } from './components/homePage/Home.Jsx'


export const App = () => {
  const [count, setCount] = useState(0)

  return (<>
  
      <NavBar />
      <Home />

      {/* <Home /> */}

    </>
  )
}


