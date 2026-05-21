import {useDispatch} from "react-redux"
import { useEffect, useState } from 'react'
import './App.css'
import authService from "./appwrite/auth"
import Header from "./components/Header/Header.jsx"
import Footer  from "./components/Footer/Footer.jsx"
import {Outlet} from "react-router-dom"
import {toggleloginStatus, togglelogoutStatus} from "./store/authSlice.js"

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then(
      (userData)=>{
        userData? dispatch(toggleloginStatus(userData)) : dispatch(togglelogoutStatus())
      }
    )
    .finally(()=> setLoading(false))  
  },[])

  return !loading ? (
    <div className='bg-slate-800 h-screen flex flex-wrap text-white'>
      <div className="block w-full">
        <Header/>
        <main>
          todo: <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : <div>loading...</div>
}

export default App
