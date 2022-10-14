import React, {useEffect} from 'react'
import Loading from './Loading'
import { useSelector, useDispatch } from 'react-redux'
import { WiCloudyWindy } from 'react-icons/wi'
import {weatherIcons} from '../../../assets/weatherIcons.js'
import {BsHeart} from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'
import { addFavorite } from '../../../redux/slices/favoritesSlice'
import { fetchCurrentWeather, fetchDailyForecast } from '../../../redux/slices/forecastSlice'


const WeatherPanel = () => {  
   const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchCurrentWeather('215854'))
      dispatch(fetchDailyForecast('215854'))
    }, [])

  const {city} = useSelector((state) => state.forecast)
  const {weather} = useSelector((state) => state.forecast)


  if (!weather) {
    return <Loading />
  } else {
  return (
  <div className="flex flex-col w-1/2 mx-auto border rounded-2xl mt-2">
    <div className="flex flex-row">
        <button><BsHeart className='text-2xl mt-4 mx-4 dark:text-amber-200 self-end'/></button>
      </div>
      <p className='mx-auto text-5xl mt-4 font-bold dark:text-amber-200'>{city}</p>
        <div className="flex flex-row justify-between mt-4">
          <WiCloudyWindy className='text-9xl mt-4 dark:text-amber-200'/>
          <p className='text-3xl my-auto font-bold  dark:text-amber-200'>{weather[0]?.Day.IconPhrase}</p>
          <p className='text-8xl my-auto font-bold dark:text-amber-200'>{(weather[0]?.Temperature.Minimum.Value + weather[0]?.Temperature.Maximum.Value) / 2}°</p>
        </div>  
  </div>
  )
}
}
// {Math.floor(weather?.Temperature.Metric.Value)}
export default WeatherPanel

