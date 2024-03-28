import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice'
// import { useNavigate } from 'react-router-dom';
import {
    onAuthStateChanged
} from "firebase/auth";

const Body = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
          const  { uid, email, displayName, photoURL } = user;
            dispatch(addUser({uid: uid, email: email, name: displayName, photoURL: photoURL}))
            // navigate("/browse");
        } else {
            dispatch(removeUser({payload: null}))
            // navigate("/browse");
        }
        });
    }, []);
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body