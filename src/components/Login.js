import React, { useState, useRef } from 'react'
import Header from './Header'
import isValidDetails from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [isError, setIsError] = useState('');
  const email = useRef('');
  const password = useRef('');
  const name = useRef('');
  const dispatch = useDispatch();
  const navidate = useNavigate();
  const handleSingIn = () => {
    setIsSignedIn(!isSignedIn)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid = isValidDetails(email.current.value, password.current.value);
    setIsError(isValid)
    if(!isValid) return
    if(isSignedIn) {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed in 
      const user = userCredential.user;
        navidate('/browse')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        setIsError(errorMessage)
      });
    } else {
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value,
          photoURL: "https://avatars.githubusercontent.com/u/86282535?s=400&u=5f49c86a87cebdf232c35b07edfbb2e5028ca125&v=4"
        }).then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, name: displayName, photo: photoURL}))
          navidate('/browse')
        }).catch((error) => {
        });
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
      });
    }
  }

  return (
    <div className=''>
        <Header />
        <div className='absolute w-full h-full'>
            <img className='w-full h-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
            alt="background" />
        </div>
          <h1 className='text-white font-bold text-3xl'>
            {isSignedIn ? 'Sign In' : 'Sign Up'}
          </h1>
          <div className='md:bg-red-800 w-3/12 bg-black'>
              <form className='sm:w-6/12 lg:w-3/12 absolute top-1/2 mx-auto my-25 p-12 left-0 right-0  opacity-80'>
                  {
                    !isSignedIn && <input ref={name} type='text' name='username' placeholder='Username' className='p-2 my-4 m-2 w-full rounded-md bg-gray-700' />
                  }
                <input type='text' ref={email} name='email' placeholder='Email' className='p-2 my-4 m-2 w-full rounded-md bg-gray-700' />
                <input type='password' ref={password} name='password' placeholder='Password' className='p-2 my-4 m-2 w-full rounded-md bg-gray-700' />
                <span className='text-red-700'>{isError}</span>
                <button className='p-2 m-4 bg-red-700 rounded-lg w-full' onClick={handleSubmit}>{isSignedIn ? 'Sign In' : 'Sign Up'}</button>
                <p onClick={handleSingIn} className='text-white cursor-pointer'>
                  {isSignedIn ? 'Not a member? Sign Up' : 'Already a member? Sign In'}
                </p>
            </form>
          </div>
    </div>
  )
}

export default Login