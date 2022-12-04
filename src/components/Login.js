import React from 'react'
import { useState }  from 'react';
import { useAuth } from '../context/authContext';
import {useNavigate} from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import ParticleBackground from './ParticleBackground';

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState();
    const {login} = useAuth();
    const navigate = useNavigate()

    const handleChange = ({target:{name, value}}) => {
        //console.log(name, value)
        setUser({...user, [name]: value}); // save username
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try{
            await login(user.email, user.password);
            navigate('/')
            //console.log(user);
        }catch(error){
            setError(error.message);
        }
    }

  return (
    <>
        {error && <p>{error}</p>}
        <ParticleBackground/>
        <div className="bg-hero bg-center bg-auto bg-accent-dark flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src="images\adastrahub.png"
              alt="icon"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-300 drop-shadow-md">
              Ad Astra Hub
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Correo electrónico"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Contraseña"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#4429A6] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
