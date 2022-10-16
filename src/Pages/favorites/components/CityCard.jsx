import React from 'react'
import { useSelector} from 'react-redux'

const CityCard = () => {
    const {favoriteCities} = useSelector(state => state.favorites)
  

  return (
    <div className='flex flex-row items-center justify-center'>
    {favoriteCities.map((favorite, index) => (
        <div key={index} className='border rounded-xl p-4 m-4 dark:bg-amber-200'>
        <p>{favorite.name}</p>
        <p>ww</p>
        </div>
        
      
    ))}
    </div>
   
  )
}

      


export default CityCard