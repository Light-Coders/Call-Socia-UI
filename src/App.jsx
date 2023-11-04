import './App.css'
import Navbar from './Components/Navbar'
import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AccountAndPrivacy from './pages/accountAndPrivacy';



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/account' element={<AccountAndPrivacy/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
