import React, { useState } from 'react'

import Loading from './Loading'

const WeatherPanel = () => {
  if (1===1) {
  return <Loading/>
  } else {
  return (
    <div className="flex flex-col w-1/2 mx-auto">
  
    </div>
    
    
  )
  }
}

  // <p className='mx-auto text-4xl mt-4 font-bold dark:text-amber-200'>{weather.city}</p>
  //   <div className='mt-2 rounded-xl w-full h-52 mx-auto flex flex-row justify-between items-center'>
  //       {/* <Icon className='text-9xl mx-4 dark:text-amber-200'/> */}
  //       <p className='dark:text-amber-200'>{weather.weatherText}</p>
  //        <p className='text-8xl dark:text-amber-200'>
  //           {Math.floor(weather.temperature)}°
  //       </p>

export default WeatherPanel