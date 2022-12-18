//import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import NavBar from "./NavBar"

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
      <div className="bg-home bg-center min-h-full sm:px-6">
        <NavBar logout={handleLogout}/>
      </div>
    </>
  )
}

export default Home
