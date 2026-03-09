import React, { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, useNavigate } from 'react-router'
import "./protected.scss"
const Protected = ({ children }) => {

    const {
        user, loading
    } = useAuth()
    const navigate = useNavigate()

    const images = [
        "laugh.gif",
        "sad.gif",
        "surprised.gif",
        "happy.gif"
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length) 
        },2000)
        return () => clearInterval(interval)
    }, [])


    if (loading) {
        return <div className="loader">
            <nav>
                <h1>Moodify</h1>
                <button onClick={() => navigate("/login")}>Login</button>
            </nav>
            <div className="sec">
                <h1>Music that understands your mood</h1>
                <div className="emoji">
                    <img src={images[index]} alt="mood" />
                    
                </div>
                
            </div>
        </div>
    }

    if (!loading && !user) {
        return <Navigate to="/login" />
    }


    return children
}

export default Protected