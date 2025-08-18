import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn