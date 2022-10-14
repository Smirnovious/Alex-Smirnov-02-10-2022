import React, { useEffect } from 'react'
import moment from 'moment';
import { fetchDailyForecast } from '../../../redux/slices/forecastSlice';
import { useSelector, useDispatch } from 'react-redux'

const Weather5DayForecast = () => {
  const dailyForecast = useSelector(state => state.forecast.dailyForecast)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDailyForecast('215854'))
  }, [])


    return (
    <div className="flex flex-row w-full mx-auto">
      { dailyForecast.map((day, index) => {
        return (
          <div key={index} className='mt-16 rounded-xl w-1/6 h-32 shadow-2xl 
          mx-auto justify-around items-center border'>
          <p className='text-black text-xl w-fit mx-auto dark:text-amber-200'>{moment(day.Date).format('ddd')}</p>
            <div className='text-black text-2xl w-fit mx-auto dark:text-amber-200'>icon</div>
            <p className='text-black text-xl w-fit mx-auto dark:text-amber-200'>{Math.floor(day.Temperature.Minimum.Value)}° - {Math.floor(day.Temperature.Maximum.Value)}°</p>
            <p className='text-black text-lg w-fit mx-auto font-bold dark:text-amber-200'>{day.Day.IconPhrase}</p>
          </div>
        )
      })}
    </div>
    

  )
}


export default Weather5DayForecast