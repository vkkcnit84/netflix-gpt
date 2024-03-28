import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovie from '../hooks/useNowPlayingMovies'
// import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div className='flex-col'>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;