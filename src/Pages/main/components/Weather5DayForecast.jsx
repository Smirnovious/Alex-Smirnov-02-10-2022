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
    <div className="flex flex-row w-1/2 mx-auto">
      { dailyForecast.map((day, index) => {
        return (
          <div key={index} className='mt-2 rounded-xl w-32 h-28 
          mx-auto justify-around items-center border'>
          <p className='text-black text-xl w-fit mx-auto dark:text-amber-200'>Sun</p>
            <div className='text-black text-2xl w-fit mx-auto dark:text-amber-200'>icon</div>
            <p className='text-black text-xl w-fit mx-auto dark:text-amber-200'>{day.Temperature.Minimum.Value} - {day.Temperature.Maximum.Value}</p>
            <p className='text-black text-sm w-fit mx-auto dark:text-amber-200'>{day.Day.IconPhrase}</p>
          </div>
        )
      })}
    </div>
    

  )
}


export default Weather5DayForecast