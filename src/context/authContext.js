import { createContext, useContext , useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged, // check user state
    signOut
} from 'firebase/auth';
import { auth }  from '../services/firebase'

// create context object
export const authContext = createContext();

// hook personalizado
export const useAuth = () => {
    const context = useContext(authContext);
    if(!context) throw new Error("No auth context available");
    return context;
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) =>  
        createUserWithEmailAndPassword(auth, email, password);
        //console.log(email, password);

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            //console.log(currentUser);
        })

        return () => unSubscribe();
    }, [])

    return <authContext.Provider value={{signUp, login, user, logout, loading}}>{children}</authContext.Provider>
}