import './App.css'
import Navbar from './Components/Navbar'
import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AccountAndPrivacy from './pages/accountAndPrivacy';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  return (
    <>
    <GoogleOAuthProvider clientId="82235631108-hvvi0bg73b777uisehil65jom9a80p1n.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/account' element={<AccountAndPrivacy/>}/>
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
    </>
  )
}

export default App
