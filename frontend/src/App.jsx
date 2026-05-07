import React from 'react'
import { BrowserRouter, Routes, Route ,Link, Navigate} from "react-router-dom";
import Home from './components/Home'

export default function App() {
  return (
    <div className='p-1'>
      <BrowserRouter>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}
