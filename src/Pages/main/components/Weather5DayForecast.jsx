import React from 'react'

const Weather5DayForecast = () => {
    const x = [1,2,3,4,5]

  return (
    <div className="flex flex-row">
        {x.map((item) => (
          <div className='border-2 bg-yellow-200 mt-2 rounded-xl w-8 h-48 mx-auto justify-around items-center'>
    </div>
        ))}
    </div>
  )
}

export default Weather5DayForecast