import { async } from "@firebase/util"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

const Home = () => {

  // useAuth return the context information
  // in this case it only return the 'user' information
  const {user, logout} = useAuth()
  //const navigate = useNavigate()
  //console.log(user)

  const handleLogout = async () =>{
    await logout()
    //navigate("/login")
  }

  return (
    <>
      <h1>Welcome {user.email}</h1>

      <button onClick={handleLogout}>LogOut</button>
    </>
  )
}

export default Home
