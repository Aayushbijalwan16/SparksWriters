import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout} from "./store/authSlice"
import { Header, Footer } from './components'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
    .then( (userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setloading(false))
  }, [])
  
  return (
    !loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-red-200'>
        <div className='w-full block'>
          <Header />
          <main>
            <Outlet />
          </main> 
        </div>
        <div className='w-full block'>
             <Footer />
        </div>
      </div>
     ) : null 
     //(
    //   <div className='flex justify-center items-center h-screen'>
        
    //   <h1 className='text-2xl font-bold'>Loading...</h1>
    //   </div>
    // )
    )
}

export default App
