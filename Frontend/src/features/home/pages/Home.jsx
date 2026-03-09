import React from 'react'
import FaceExpression from '../../Expression/components/FaceExpression'
import Player from '../components/Player'
import { useSong } from '../hook/useSong'
import { logout } from '../../auth/services/auth.api'
import { useNavigate } from 'react-router'

const Home = () => {

  const {handleGetSong} = useSong();
  const navigate = useNavigate();
 
  async function handleLogout() {
    await logout()
    navigate("/")  
    }
  

  return (
      <>
      <button onClick={handleLogout}>Logout</button>
      <FaceExpression 
      onClick={(expression) => {handleGetSong({mood: expression})}}
      />
      <Player />
    </>
  )
}

export default Home