import React, { useState } from 'react'

import { WiSleet } from 'react-icons/wi';
const WeatherPanel = ({weather}) => {
  return (
    <div className="flex flex-col w-1/2 mx-auto">
    <p className='mx-auto text-4xl mt-4 font-bold dark:text-amber-200'>{weather.city}</p>
    <div className='mt-2 rounded-xl w-full h-52 mx-auto flex flex-row justify-between items-center'>
        <WiSleet className='text-9xl mx-4 dark:text-amber-200'/>
        <p className='dark:text-amber-200'>{weather.weatherText}</p>
         <p className='text-8xl dark:text-amber-200'>
            {weather.temperature}°
        </p>
    </div>
    
    </div>


  )
}

export default WeatherPanel