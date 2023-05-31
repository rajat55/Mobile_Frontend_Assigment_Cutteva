import React from 'react'
import StartingPage from './pages/StartingPage'
import ProfilePage from './pages/ProfilePage'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <div>
        
        <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StartingPage />}/>
         
          <Route path="/landing" element={<LandingPage />} />
          <Route path="profile" element={<ProfilePage />} />
          
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}
