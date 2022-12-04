import React from 'react'
import { useState }  from 'react';
import { useAuth } from '../context/authContext';
import {useNavigate} from 'react-router-dom'

const Register = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState();

    const {signUp} = useAuth();
    const navigate = useNavigate()

    const handleChange = ({target:{name, value}}) => {
        //console.log(name, value)
        setUser({...user, [name]: value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try{
            await signUp(e.username, e.password);
            navigate('/')
            //console.log(user);
        }catch(error){
            setError(error.message);
        }
    }

  return (
    <div>
        {error && <p>{error}</p>}

        <form onSubmit={onSubmit}>
            <label htmlFor='username'>Email</label>
            <input 
                type='email' 
                name='email' 
                placeholder="adastrahub@gmail.com"
                onChange={handleChange}
            />
            <label htmlFor='password'>Password</label>
            <input
                type='password' 
                name='password' 
                onChange={handleChange} 
            />
            <button>Register</button>
        </form>
    </div>
  )
}

export default Register
