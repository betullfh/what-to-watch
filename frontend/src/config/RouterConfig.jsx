import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import FilmList from '../components/FilmList'

function RouterConfig() {
  return (
   <Routes>
    <Route path="/signup" element={<RegisterPage/>}/>
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/" element={<HomePage/>}/>
    <Route path='/films' element={<FilmList/>}/>
   </Routes>
  )
}

export default RouterConfig