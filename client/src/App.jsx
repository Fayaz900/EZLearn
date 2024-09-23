import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/pages/home/HomePage'
import Header from './components/header/Header'
import Login from './components/AuthComponents/Login/Login'
import RegistartionForm from './components/AuthComponents/Register/Register'
import { UserData } from './context/UserContext'
import Profile from './components/profile/Profile'

const App = () => {
  const {isAuth,setIsAuth} = UserData()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an async auth check (like from localStorage, API, etc.)
    const checkAuthStatus = async () => {
      // Example: Fetching auth status from localStorage or API
      const auth = await new Promise((resolve) => {
        setTimeout(() => resolve(localStorage.getItem('isAuth') === 'true'), 1000);
      });


      setLoading(false); // Mark loading as complete
    };

    checkAuthStatus();
  }, []);

  if (loading) {
    // Display a loading spinner or a blank screen while waiting for auth check
    return <div>Loading...</div>;
  }
  return (
    <div>
      <BrowserRouter>
      <Header isAuth={isAuth}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/account' element={isAuth? <Profile/> :<Login/>}/>
        <Route path='/login' element={isAuth? <HomePage/> : <Login/>}/>
        <Route path='/register' element={isAuth? <HomePage/> :<RegistartionForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App