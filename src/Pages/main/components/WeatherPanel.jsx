import React, {useEffect} from 'react'
import Loading from './Loading'
import { useSelector, useDispatch } from 'react-redux'
import { WiCloudyWindy } from 'react-icons/wi'
import { getWeather, get5DayForecast } from '../../../redux/slices/forecastSlice'
import {weatherIcons} from '../../../assets/weatherIcons.js'

const WeatherPanel = () => {  
  const dispatch = useDispatch()
  const city = useSelector(state => state.forecast.city)
  const {weather} = useSelector(state => state.forecast)
  

  

  if (!weather) {
    return <Loading />
  } else {
  return (
  <div className="flex flex-col w-1/2 mx-auto">
        <p className='mx-auto text-4xl mt-4 font-bold dark:text-amber-200'>{city}</p>
        <div className="flex flex-row justify-between mt-4">
          <WiCloudyWindy className='text-9xl mt-4 dark:text-amber-200'/>
          <p className='text-4xl my-auto font-bold  dark:text-amber-200'>{weather[0]?.WeatherText}</p>
          <p className='text-8xl my-auto font-bold dark:text-amber-200'>{Math.floor(weather[0]?.Temperature.Metric.Value)}°</p>
        </div>  
  </div>
  )
}
}

export default WeatherPanel

