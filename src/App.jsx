import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./Header"
import Footer from './Footer'
import Home from './Home'
import About from './about'
import SingleProduct from './Single-product'
import NotF from './Notfound'
import "./style/index.css"
export default function नमस्ते() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/Single-product/:id" element={<SingleProduct/>}/>
        <Route path="/*"  element={<NotF/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}
