import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import FilmList from '../components/FilmList'
import AboutPage from '../pages/AboutPage'
import CreateFilm from '../components/CreateFilm'
import UpdateFilm from '../components/UpdateFilm'

function RouterConfig() {
  return (
   <Routes>
    <Route path="/signup" element={<RegisterPage/>}/>
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/" element={<HomePage/>}/>
    <Route path='/films' element={<FilmList/>}/>
    <Route path= "/about" element={<AboutPage/>}/>
    <Route path="/addMovie" element={<CreateFilm/>}/>
    <Route path='/updateMovie' element={<UpdateFilm/>}/>
   </Routes>
  )
}

export default RouterConfig