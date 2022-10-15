import React, {useEffect} from 'react'
import Loading from './Loading'
import { useSelector, useDispatch } from 'react-redux'
import { WiCloudyWindy } from 'react-icons/wi'
import {BsHeart} from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'
import { fetchCurrentWeather, setCity } from '../../../redux/slices/forecastSlice'
import { addFavorite, removeFavorite } from '../../../redux/slices/favoritesSlice'

const WeatherPanel = () => {  
   const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchCurrentWeather('215854'))
    }, [])
    const currentWeather = useSelector(state => state.forecast.currentWeather)
    const city = useSelector(state => state.forecast.city)


  if (!currentWeather) {
    return <Loading />
  } else {
  return (
  <div className="flex flex-col w-1/2 mx-auto rounded-2xl mt-2">
    <div className="flex flex-row">
        <button><BsHeart className='text-2xl mt-4 mx-4 dark:text-amber-200 self-end'/></button>
      </div>
      <p className='mx-auto text-5xl mt-4 font-bold dark:text-amber-200'>{city}</p>
        <div className="flex flex-row justify-between mt-4">
          <WiCloudyWindy className='text-9xl mt-4 dark:text-amber-200'/>
          <p className='text-3xl my-auto font-bold  dark:text-amber-200'>{currentWeather.WeatherText}</p>
          <p className='text-8xl my-auto font-bold dark:text-amber-200'>{Math.floor(currentWeather.Temperature.Metric.Value)}°</p>
        </div>  
  </div>
  )
  }
}


export default WeatherPanel

