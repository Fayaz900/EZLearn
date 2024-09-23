import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/pages/home/HomePage'
import Header from './components/header/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App