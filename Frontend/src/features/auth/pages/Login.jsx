import React,{useState} from 'react'
import "../style/login.scss"
import FormGroup from '../components/FormGroup'
import { Link } from "react-router"
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Login = () => {
  const { loading, handleLogin } = useAuth()

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    await handleLogin({ email, password })
    navigate("/")
  }

  return (
    <div className='login-page'>
      <div className="login-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <FormGroup
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Enter your email" />
            
          <FormGroup
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            label="password"
            placeholder="Enter your password" />
          <button className='button' type="submit">Login</button>

        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  )
}

export default Login