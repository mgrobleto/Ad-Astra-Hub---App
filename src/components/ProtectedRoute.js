import { useAuth } from "../context/authContext"
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children}) => {

    const {loading, user} = useAuth()

    if (loading) return <h1>loading</h1>
    if (!user) return <Navigate to={"/login"}/>

  return <>{children}</>
}

export default ProtectedRoute
