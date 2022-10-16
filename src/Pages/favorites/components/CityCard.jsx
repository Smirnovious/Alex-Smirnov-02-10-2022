import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { fetchCurrentWeather } from '../../../redux/slices/forecastSlice'

const CityCard = () => {
    const {favoriteCities} = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    const currentWeather = useSelector(state => state.currentWeather)

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