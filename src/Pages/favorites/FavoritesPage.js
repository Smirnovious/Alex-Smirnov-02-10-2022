import React from 'react'
import NavBar from '../main/components/NavBar'
import CityCard from './components/CityCard'

const FavoritesPage = () => {
  return (
    <div className='bg-cyan-400 dark:bg-gray-800 h-screen'> 
    <NavBar/>
    <CityCard/> 
    </div>
    )
}

export default FavoritesPage