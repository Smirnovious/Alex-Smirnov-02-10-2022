import React from 'react'
import NavBar from '../main/components/NavBar'
import CityCards from './components/CityCards'
const FavoritesPage = () => {

  return (
    <div className='bg-gray-50 dark:bg-gray-800 h-screen'> 
      <NavBar/>
      <CityCards/> 
    </div>
    )
}

export default FavoritesPage