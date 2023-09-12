import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './components/Categories/Category'
import RandomMeal from './components/RandomMeal/RandomMeal'
import HomePage from './components/HomePage/HomePage'
import Ingridients from './components/HomePage/Ingridients'
import AlphaMeal from './components/HomePage/AlphaMeal'
import './App.css'
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
     <Navbar />

      <Routes>

      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/Category' element={<Category/>}/>
      <Route exact path='/RandomMeal' element={<RandomMeal/>}/>
      <Route exact path='/:id' element={<Ingridients/>}/>
      <Route exact path='/alpha/:index' element={<AlphaMeal />} />

      
      </Routes>
      

    <Footer />
    </BrowserRouter>

    </div>
  )
}

export default App
