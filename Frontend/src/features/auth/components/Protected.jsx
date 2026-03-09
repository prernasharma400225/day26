import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, useNavigate } from 'react-router'
import "./protected.scss"
const Protected = ({children}) => {

    const {
        user, loading
    }= useAuth()
    const navigate = useNavigate()

    
    if(loading) {
        return <>
        <nav>
            <h1>Moodify</h1>
            <button onClick={() => navigate("/login")}>Login</button>
        </nav>
        </>
    }
    
   if (!loading && !user) {
  return <Navigate to="/login" />
}
   
    
  return  children
}

export default Protected