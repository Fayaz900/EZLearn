import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/pages/home/HomePage'
import Header from './components/header/Header'
import Login from './components/AuthComponents/Login/Login'
import RegistartionForm from './components/AuthComponents/Register/Register'
import { UserData } from './context/UserContext'
import Profile from './components/profile/Profile'
import { About } from './components/pages/about/About'
import { Loading } from './components/utils/loading/Loading'

const App = () => {
  const {isAuth, user} = UserData()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const auth = await new Promise((resolve) => {
        setTimeout(() => resolve(localStorage.getItem('isAuth') === 'true'), 1000);
      });
      setLoading(false); 
    };
    checkAuthStatus();
  }, []);

  if (loading) {
    // Display a loading spinner or a blank screen while waiting for auth check
    return <Loading/>;
  }
  return (
    <div>
      <BrowserRouter>
      <Header isAuth={isAuth}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/account' element={isAuth? <Profile user={user}/> :<Login/>}/>
        <Route path='/login' element={isAuth? <HomePage/> : <Login/>}/>
        <Route path='/register' element={isAuth? <HomePage/> :<RegistartionForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App