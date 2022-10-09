import React from 'react'

const Weather5DayForecast = ({forecast}) => {
    return (
    <div className="flex flex-row w-1/2 mx-auto">
      {forecast.map((day, index) => {
        return (
          <div key={index} className='mt-2 rounded-xl w-28 h-28 
          mx-auto justify-around items-center dark:text-amber-200'>
            <div className='text-white text-2xl w-fit mx-auto'>icon</div>
            <p className='text-white text-xl w-fit mx-auto'>{Math.floor(day.Temperature.Minimum.Value)}°/{Math.floor(day.Temperature.Maximum.Value)}°</p>
            <p className='text-white text-xl w-fit mx-auto'>Sun</p>
          </div>
        )
      })}
    </div>

  )
}


export default Weather5DayForecast