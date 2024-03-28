/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => {
   return store.user
  })
  // console.log('USER header', user)
  const handleSingOut = () => {
    signOut(auth).then(() => {
      removeUser({payload: null})
      navigate('/')
    }).catch((error) => {
      console.error(error)
    });
  }

  const capitalizeFirstChar = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
     <div className="absolute flex justify-between px-7 w-screen py-2 bg-gradient-to-b from-transparent to-black z-10">
            <img className="w-44" src="./Netflix_Logo_PMS.png" alt='logo'/>
            <div>
           {
             user && <div className='flex justify-between items-center'>
             <img className='w-10 h-10 rounded-2xl' src={user.photoURL} alt='avatar'></img>
             <span className='p-2 text-white'>{capitalizeFirstChar(user.name)}</span>
             <button className="text-white font-bold px-6 py-2" onClick={handleSingOut}>Sign out</button>
           </div>
           }
            </div>
      </div>
    </> 
  )
}

export default Header