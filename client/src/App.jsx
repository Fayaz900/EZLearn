import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/pages/home/HomePage'
import Header from './components/header/Header'
import Login from './components/AuthComponents/Login/Login'
import RegistartionForm from './components/AuthComponents/Register/Register'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegistartionForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App