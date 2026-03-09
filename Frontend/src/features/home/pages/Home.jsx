import React from 'react'
import FaceExpression from '../../Expression/components/FaceExpression'
import Player from '../components/Player'
import { useSong } from '../hook/useSong'
// import { logout } from '../../auth/services/auth.api'
import { useNavigate } from 'react-router'
import { useAuth } from '../../auth/hooks/useAuth'
import "./home.scss"

const Home = () => {

  const { handleLogout } = useAuth()
  const {handleGetSong} = useSong();
  const navigate = useNavigate();
 
  async function logoutUser() {
    
    await handleLogout()
    navigate("/")  
    }
  

  return (
      <>
      <nav>
                <h1>Moodify</h1>
                {/* <button onClick={() => navigate("/login")}>Login</button> */}
      <button onClick={logoutUser}>Logout</button>
            </nav>
      <FaceExpression 
      onClick={(expression) => {handleGetSong({mood: expression})}}
      />
      <Player />
    </>
  )
}

export default Home