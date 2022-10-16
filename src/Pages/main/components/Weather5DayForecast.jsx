import React, { useEffect } from 'react'
import moment from 'moment';
import { fetchDailyForecast } from '../../../redux/slices/forecastSlice';
import { useSelector, useDispatch } from 'react-redux'
import { degreeConverter } from '../../../utils/degreeConverter';
import { iconPicker } from '../../../utils/iconPicker'


const Weather5DayForecast = () => {
  const dailyForecast = useSelector(state => state.forecast.dailyForecast)
  const dispatch = useDispatch()
  const {isMetric} = useSelector(state => state.forecast)
  useEffect(() => {
    dispatch(fetchDailyForecast('215854'))
  }, [dispatch])


    return (
    <div className="flex flex-col lg:flex-row w-full mx-auto">
      {dailyForecast.map((day, index) => {
        return (
          <div key={index} className='lg:mt-16 rounded-xl w-full lg:w-1/6 h-32 shadow-2xl 
          mx-auto justify-around items-center lg:border'>
            <p className='text-black text-xl w-fit mx-auto dark:text-amber-200'>{moment(day.Date).format('ddd')}</p>
            <p className='text-black text-xl w-fit mx-auto dark:text-amber-200'>{iconPicker(day.Day.Icon)}</p>
            <p className='text-black text-xl w-fit mx-auto dark:text-amber-200'>{isMetric ?  `${Math.floor(day.Temperature.Minimum.Value)}\xB0C - ${Math.floor(day.Temperature.Maximum.Value)}\xB0C` : degreeConverter(day.Temperature.Minimum.Value, day.Temperature.Maximum.Value)}</p>
            <p className='text-black text-lg w-fit mx-auto font-bold dark:text-amber-200'>{day.Day.IconPhrase}</p>
          </div>
        )
      })}
    </div>
    

  )
}


export default Weather5DayForecast