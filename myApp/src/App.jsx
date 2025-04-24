import React from 'react'
import Home from './components/Home'
import {Routes,Route} from "react-router-dom"
import About from './components/About'
import Product from './components/Product'
import Services from './components/Services'
import Contact from './components/Contact'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route exact path = "/about" element={<About/>}/>
      <Route exact path = "/product" element={<Product/>}/>
      <Route exact path = "/services" element={<Services/>}/>
      <Route exact path = "/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App