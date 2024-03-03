import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleSingIn = () => {
    setIsSignedIn(!isSignedIn)
    console.log(isSignedIn)
  }

  return (
    <div className=''>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
            alt="background" />
        </div>
       <p className='text-white absolute top-1/2 mx-auto my-25 p-12 left-0 right-0'> {isSignedIn ? 'HI' : 'BYssE'}</p>
        <form className='w-3/12 absolute top-1/2 mx-auto my-25 p-12 left-0 right-0 bg-black opacity-80'>
          <h1 className='text-white font-bold text-3xl'>
            {isSignedIn ? 'Sign In' : 'Sign Up'}
          </h1>
          <input type='text' name='email' placeholder='Email' className='p-2 my-4 m-2 w-full rounded-md bg-gray-700' />
          <input type='password' name='password' placeholder='Password' className='p-2 my-4 m-2 w-full rounded-md bg-gray-700' />
          <button className='p-2 m-4 bg-red-700 rounded-lg w-full'>{isSignedIn ? 'Sign In' : 'Sign Up'}</button>
          <p onClick={handleSingIn} className='text-white cursor-pointer'>
          {isSignedIn ? 'Not a member? Sign Up' : 'Already a member? Sign In'}
        </p>
        </form>
    </div>
  )
}

export default Login